import type { ApiRequest, ApiResponse } from './_lib/http.js';
import { jsonBodyError, readJsonBody, requireMethod, sendJson } from './_lib/http.js';
import { rateLimit, rejectRateLimited } from './_lib/rate-limit.js';

type AssistantBody = { message?: unknown };

const SYSTEM_PROMPT = `You are the Lukulu Academy assistant. Help visitors with Academy courses, music-production learning, Reason 14, FL Studio, Cubase, music business, memberships and student support. Be concise, practical and welcoming. Never invent prices, availability, policies, instructors or guarantees. If information is missing, direct the visitor to the enquiry page.`;

type ResponsePayload = {
  choices?: Array<{ message?: { content?: unknown } }>;
};

type ErrorPayload = { error?: { message?: unknown } };

function errorMessage(payload: unknown) {
  if (!payload || typeof payload !== 'object') return 'unknown';
  const error = (payload as ErrorPayload).error;
  return error && typeof error.message === 'string' ? error.message : 'unknown';
}

function textFromResponse(payload: unknown) {
  if (!payload || typeof payload !== 'object') return '';
  const choices = (payload as ResponsePayload).choices;
  const output = choices?.[0]?.message?.content;
  if (typeof output === 'string') return output.trim();
  if (Array.isArray(output)) {
    return output
      .map((part) => (part && typeof part === 'object' && 'text' in part && typeof part.text === 'string' ? part.text : ''))
      .join('')
      .trim();
  }
  return '';
}

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (!requireMethod(request, response, 'POST')) return;

  const rate = rateLimit(request, 20);
  if (!rate.allowed) return rejectRateLimited(response, rate.retryAfter);

  const apiKey = process.env.ACEDATA_API_KEY?.trim();
  if (!apiKey) {
    return sendJson(response, 503, { error: 'The Academy assistant is not configured yet.', code: 'AI_NOT_CONFIGURED' });
  }

  let body: AssistantBody;
  try {
    body = await readJsonBody<AssistantBody>(request, 12_000);
  } catch (error) {
    return jsonBodyError(response, error);
  }

  const message = typeof body.message === 'string' ? body.message.trim() : '';
  if (!message || message.length > 2_000) {
    return sendJson(response, 400, { error: 'Send a message between 1 and 2,000 characters.', code: 'INVALID_MESSAGE' });
  }

  try {
    const upstream = await fetch('https://api.acedata.cloud/openai/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gpt-5-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message },
        ],
        temperature: 0.4,
        max_tokens: 500,
      }),
    });

    const payload = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      console.error('Academy assistant upstream error', upstream.status, errorMessage(payload));
      return sendJson(response, 502, { error: 'The assistant is temporarily unavailable.', code: 'AI_UPSTREAM_ERROR' });
    }

    const reply = textFromResponse(payload);
    if (!reply) return sendJson(response, 502, { error: 'The assistant returned an empty response.', code: 'AI_EMPTY_RESPONSE' });
    return sendJson(response, 200, { reply });
  } catch (error) {
    console.error('Academy assistant request failed', error);
    return sendJson(response, 502, { error: 'The assistant is temporarily unavailable.', code: 'AI_REQUEST_FAILED' });
  }
}
