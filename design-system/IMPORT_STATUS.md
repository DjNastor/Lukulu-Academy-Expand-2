# Lukulu Design System Repair

This branch safely stages the repaired Magic Patterns export without changing the production application on `main`.

## Repaired archive

- File: `lukulu-design-system-fixed.zip`
- SHA-256: `26f3eb0b7cc6622f028ec4b3a1cff2b01a14a9263d91c61d7a1b98a09bb9eaa6`
- Archive integrity: verified with `unzip -t`
- Contents: React 18, TypeScript, Vite, Tailwind component catalogue

## Fixes applied

- Added Vite environment typings for Supabase configuration.
- Added `.env.example` without secrets.
- Removed obsolete React default imports that fail strict TypeScript checks.
- Added explicit `react-markdown` component typing.
- Fixed React keyboard and CSS property type imports.
- Removed duplicate runtime Google Font injection.
- Removed the broken `/vite.svg` favicon reference.
- Added an SPA rewrite for Vercel preview routes.
- Added `typecheck` and complete `check` scripts.
- Renamed the package from the generic Magic Patterns template name.
- Added a supported Node engine range.
- Added deployment and library-entry documentation.

## Google Cloud

- Project ID: `lukulu-academy`
- Console: `https://console.cloud.google.com/?project=lukulu-academy`

No service-account key or secret belongs in this repository. Store secrets in the selected Google Cloud service, GitHub Actions secrets, Supabase, or Vercel environment settings.

## Import procedure

1. Put `lukulu-design-system-fixed.zip` in the repository root.
2. Run `design-system/import-design-system.ps1` from PowerShell.
3. Review the extracted source under `design-system/source`.
4. Run `npm install` and `npm run check` from that directory.
5. Integrate selected components into the main Lukulu Academy application rather than replacing the production app wholesale.

## Validation note

The archive structure and ZIP checksum were verified. Full dependency-based lint/build validation could not be completed in the repair runner because package installation timed out; the import script leaves `main` untouched so CI or a local machine can complete that final check safely.
