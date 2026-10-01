# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). The site deploys on every
merge to `master`; versions mark notable milestones and are tagged `vX.Y.Z`.

## [Unreleased]

## [1.1.0] - 2026-10-01

### Added

- Redesigned 404 page with a reusable `Compass.astro` component
- Background image preloaded at high priority for each breakpoint (`src/lib/background.js`) to
  speed up LCP; one-week `Cache-Control` for `favicon.png` and `og.png`
- Security headers: `Cross-Origin-Opener-Policy`, `X-Permitted-Cross-Domain-Policies`, and
  `browsing-topics=()` in `Permissions-Policy`
- `.github/workflows/lighthouse.yml` + `lighthouserc.json`: weekly (and on-demand) Lighthouse
  run against production, median of 3, asserting LCP/FCP/CLS/TBT budgets
- Dependabot now also updates GitHub Actions
- `CLAUDE.md` with project overview and conventions; shared `.vscode/` settings
- `pnpm-workspace.yaml`: pnpm settings — `engineStrict`, install-script allowlist (`esbuild`,
  `sharp`), the `vite` → Vite+ core override, and a peer rule for that alias

### Changed

- Canonical host is now the apex `https://buckley.ca` (was `www`), and pages build as flat files
  (`build.format: "file"`) so canonical URLs no longer redirect; sitemap, `robots.txt` and
  `llms.txt` updated to match
- CSP allows Cloudflare Web Analytics; HSTS set to 6 months with `includeSubDomains; preload`
  to match Cloudflare's edge value
- Migrated toolchain to Vite+ 1.0.0 (`vp`) per <https://viteplus.dev/guide/migrate>; Oxfmt +
  Oxlint via `vp check`, Prettier kept for `.astro`, Playwright run via `vp run test`
- Package manager switched from npm to **pnpm** (`packageManager: pnpm@12.8.1`):
  `package-lock.json` → `pnpm-lock.yaml`; CI uses `pnpm/action-setup` and
  `pnpm install --frozen-lockfile`; Playwright `webServer` runs `pnpm run build/preview`
- `allowScripts` and `overrides` moved from `package.json` into `pnpm-workspace.yaml`
- Node 24.21.0; Astro 7.0 → 7.3.5, Playwright 1.63, Prettier 3.9 and other dependency updates;
  GitHub Actions bumped to `checkout@v7`, `setup-node@v7`, `dependency-review-action@v5`
- CHANGELOG reorganised into versioned, dated releases; the 2026-03-02 code review moved to
  `docs/code-review-2026-03-02.md` and the SvelteKit-era developer notes removed

### Removed

- `package-lock.json` and `.npmrc` (`engine-strict` now lives in `pnpm-workspace.yaml`)

### Fixed

- `vp test` (Vitest) no longer collects the Playwright suite in `tests/`; Vite+ workflow
  documented in `README.md`, `CLAUDE.md` and `AGENTS.md`
- Header active-link and canonical URL detection under flat-file builds (`src/lib/route-path.js`)

### Security

- Patched transitive advisories: `yaml` (GHSA-48c2-rrv3-qjmp), `js-yaml`
  (GHSA-5p4m-2wfm-xmqj), `nanoid` (CVE-2026-67213), `fast-uri` (GHSA-58mr-gqgx-xq4g), `undici`

## [1.0.0] - 2026-06-30

Replatformed from SvelteKit to Astro 7.

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

## Pre-1.0 (SvelteKit) - 2026-03-02

Fixes from the [2026-03-02 code review](docs/code-review-2026-03-02.md).

### Fixed

- **tests/test.js**: Fixed broken test - was expecting "Welcome to SvelteKit", now expects "buckley"
- **src/routes/+error.svelte**: Removed `@ts-nocheck`, added null-safe access `$page.error?.message ?? 'Unknown error'`
- **src/lib/ContactForm.svelte**: Added `required` attrs, `<label for>/<input id>` associations
- **src/lib/Logo.svelte**: Fixed `viewbox` → `viewBox` (camelCase), added a11y svelte-ignore

[Unreleased]: https://github.com/buckley-ca/buckley.ca/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/buckley-ca/buckley.ca/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/buckley-ca/buckley.ca/releases/tag/v1.0.0
