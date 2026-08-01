# Copilot instructions for Lukulu Academy

Read `docs/PRODUCT_VISION.md` before changing product behavior, navigation, copy, visual design, or architecture.

## Source branch and platform

- Production source: `main`
- Active platform: Next.js 16 App Router, React 19, TypeScript, Node.js 24
- Product: Lukulu Academy LMS and DAW Learning Lab
- Do not restore the deleted legacy Vite site or its Vercel `dist` output configuration.
- Do not mix work from `wip/save-design-edits` or other legacy Vite branches into the LMS without explicit review.

## Product guardrails

- Preserve the official curriculum as an external academic source of truth: https://djnastor.github.io/LAR-curriculumn/
- Integrate or reference curriculum data; do not create an untraceable competing curriculum.
- Build focused DAW learning exercises, not a full browser DAW.
- Follow one page = one message = one action.
- Use simple beginner-friendly English and concise labels.
- Keep public navigation and the dashboard intentionally small.
- Design mobile first with progressive disclosure and one open accordion module at a time.
- Preserve the premium dark African creative-technology direction.

## Approved visual tokens

- Background `#0A0A0A`
- Primary text `#F5F3EF`
- Accent `#FF8A65`
- Success `#46C37B`

Use the accent sparingly. Prefer large typography, generous spacing, rounded cards, thin borders, restrained shadows, outline icons, and professional studio imagery. Avoid generic school imagery, cartoons, clutter, bright palettes, and long blocks of copy.

## Engineering guardrails

1. Confirm the current branch before editing.
2. Inspect existing architecture and reuse components before adding abstractions.
3. Prefer small, focused diffs; do not rewrite unrelated files.
4. Preserve existing routes and interactive labs unless a migration plan is explicit.
5. Never leave conflict markers, duplicate markup, dead code, unused imports, fake data presented as live, or navigation to missing routes.
6. Treat authentication, payments, uploads, certificates, AI answers, and tutor/admin capabilities as security-sensitive.
7. Apply Supabase Row Level Security before exposing student data.
8. Never commit secrets or fabricate environment values.
9. Stage Mux, R2, Paystack/Peach, Resend, PostHog, and Sentry integrations independently so production remains stable.
10. Before completion run:
   - `npm ci`
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build`
11. Smoke-test changed routes and verify missing routes return 404.
12. Do not push or promote production until checks pass and the change is reviewed.

## Completion report

For every meaningful change, report:

- What changed
- Why it supports `docs/PRODUCT_VISION.md`
- Routes affected
- Checks run and their results
- Remaining risks, placeholders, or integrations not yet active
