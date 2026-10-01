# Changelog

All notable changes to this project are documented here, in the style of
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

The site deploys on every merge to `master`, so there are no version numbers: changes are grouped
under the date they merged (UTC, newest first). Add new entries under today's date, creating the
heading if needed.

## 2026-10-01

### Added

- `pnpm-workspace.yaml`: pnpm settings — `engineStrict`, install-script allowlist (`esbuild`,
  `sharp`), the `vite` → Vite+ core override, and a peer rule for that alias

### Changed

- Package manager switched from npm to **pnpm** (`packageManager: pnpm@12.8.1`):
  `package-lock.json` → `pnpm-lock.yaml`; CI uses `pnpm/action-setup` and
  `pnpm install --frozen-lockfile`; Playwright `webServer` runs `pnpm run build/preview`
- `allowScripts` and `overrides` moved from `package.json` into `pnpm-workspace.yaml`

### Removed

- `package-lock.json` and `.npmrc` (`engine-strict` now lives in `pnpm-workspace.yaml`)

### Fixed

- `vp test` (Vitest) no longer collects the Playwright suite in `tests/`; Vite+ workflow
  documented in `README.md`, `CLAUDE.md` and `AGENTS.md`

## 2026-09-30

### Changed

- Migrated toolchain to Vite+ 1.0.0 (`vp`) per <https://viteplus.dev/guide/migrate>; Oxfmt +
  Oxlint via `vp check`, Prettier kept for `.astro`, Playwright run via `vp run test`

## 2026-09-22

### Added

- `.github/workflows/lighthouse.yml` + `lighthouserc.json`: weekly (and on-demand) Lighthouse
  run against production, median of 3, asserting LCP/FCP/CLS/TBT budgets

## 2026-06-26

Migrated from SvelteKit to Astro 7.

### Added

- SEO/social meta in `Layout.astro`: canonical link, Open Graph and Twitter Card tags
- `site` set in `astro.config.mjs` (enables absolute canonical URLs)
- `public/robots.txt` and `public/sitemap.xml`
- `.github/workflows/ci.yml`: runs lint, type-check, build, and Playwright tests on PRs
- `engines.node` (`^24.0.0`) in `package.json` so Vercel (which does not read
  `.node-version`) builds on a Node version Astro 7 supports

### Changed

- `README.md` rewritten for Astro (was still SvelteKit boilerplate)
- Bumped `dependency-review.yml` actions (`checkout@v4`, `dependency-review-action@v4`)
- Accessibility: SVG logo `role="img"`/`aria-label`, nav `aria-current`, honeypot
  field made inert (`tabindex="-1"`, `aria-hidden`), `autocomplete` on email field

### Removed

- Obsolete/invalid CSS: bogus `-webkit-padding`, redundant `-moz-`/`-webkit-`
  `border-radius`, `background-size`, and `filter` vendor prefixes; deduped the
  background-image media query

## 2026-03-02

SvelteKit site; fixes from the [2026-03-02 code review](docs/code-review-2026-03-02.md).

### Fixed

- **tests/test.js**: Fixed broken test - was expecting "Welcome to SvelteKit", now expects "buckley"
- **src/routes/+error.svelte**: Removed `@ts-nocheck`, added null-safe access `$page.error?.message ?? 'Unknown error'`
- **src/lib/ContactForm.svelte**: Added `required` attrs, `<label for>/<input id>` associations
- **src/lib/Logo.svelte**: Fixed `viewbox` → `viewBox` (camelCase), added a11y svelte-ignore
