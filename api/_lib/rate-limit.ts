import type { IncomingMessage } from 'node:http';

// Best-effort per-instance limiter. Vercel may run several instances, so this is
// intentionally a first line of defence; provider/WAF limits should supplement it.
type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const WINDOW_MS = 60_000;
const MAX_ENTRIES = 10_000;

function clientKey(request: IncomingMessage) {
  const forwarded = request.headers['x-forwarded-for'];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0];
  return (value?.trim() || request.socket.remoteAddress || 'unknown').slice(0, 100);
}

export function rateLimit(request: IncomingMessage, limit: number, now = Date.now()) {
  const key = clientKey(request);
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    if (buckets.size >= MAX_ENTRIES) {
      for (const [entryKey, entry] of buckets) {
        if (entry.resetAt <= now) buckets.delete(entryKey);
      }
    }
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  current.count += 1;
  return {
    allowed: current.count <= limit,
    retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
  };
}

export function rejectRateLimited(response: { statusCode: number; setHeader(name: string, value: string): void; end(body?: string): void }, retryAfter: number) {
  response.statusCode = 429;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Retry-After', String(retryAfter));
  response.end(JSON.stringify({ error: 'Too many requests. Please try again shortly.', code: 'RATE_LIMITED' }));
}
