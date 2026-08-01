# Copilot instructions for Lukulu Academy

This repository's production source is the Next.js LMS on `main`.

## Product direction

- Premium Lukulu Academy LMS with DAW Learning Lab.
- Beginner-friendly, mobile-first UX.
- One screen = one message = one action.
- Strong African identity with a restrained premium dark creative-tech interface.

## Technical guardrails

- Framework: Next.js 16 App Router.
- Runtime: Node.js 24.x.
- Do not reintroduce Vite, `dist` output settings, or legacy `src/` app structure.
- Preserve `vercel.json` as Next.js-only deployment config.
- Preserve implemented routes and labs unless explicitly asked to change them.

## Required checks before completion

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Do not leave conflict markers, duplicate sections, unused imports, dead constants, or broad unrelated rewrites.
