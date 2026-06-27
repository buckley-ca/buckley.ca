# buckley.ca — SvelteKit → Astro 7 Migration: Remaining TODO

**Status as of handoff (2026-06-26):** Code migration complete and verified locally.
Branch pushed to GitHub. Remaining work is dashboard configuration + live verification —
none of it can be done from a commit.

---

## Where things stand

- **Branch on GitHub:** `migrate-sveltekit-to-astro` (2 commits ahead of `master`)
  - `ff3e7e5` — initial SvelteKit → Astro 7 port
  - `d215008` — refinements (routing, form hardening, tests, config, tooling)
- **Verified locally (all green):**
  - `astro check` → 0 errors / 0 warnings / 0 hints
  - `astro build` → 3 static pages (`index`, `contact/index`, `404`)
  - Playwright → 11/11 structural tests pass
  - `prettier --check .` → clean
  - `dist/` validation → correct files, `fadeIn` + Cloudinary present, no Svelte artifacts
- **NOT yet done:** PR not opened, dashboards not reconfigured, no live deploy verified.

---

## TODO — For the human (dashboards + GitHub)

These require account access and cannot be automated from the repo.

### 1. Open the PR

- [ ] Open a PR from `migrate-sveltekit-to-astro` → `master` (draft is fine).
- [ ] Let Cloudflare Pages + Vercel Git integrations build their previews — the preview
      deploy is the real end-to-end test of the new static config.

### 2. Vercel dashboard — DO BEFORE MERGING (most important)

Project → Settings → Build & Development Settings:

- [ ] **Framework Preset: change SvelteKit → Astro.** Critical. If left as SvelteKit,
      Vercel looks for SvelteKit output paths that no longer exist and the build fails.
- [ ] **Output Directory: explicitly set to `dist`.** Do not trust the Astro preset
      default — toggle the override and type `dist` manually.
- [ ] Confirm Node version satisfies Astro 7's **Node 22 minimum** (repo `.node-version`
      is `^24.0.0`).
- [ ] If the first preview build ran while preset was still "SvelteKit," it may have
      failed — flip preset, then redeploy.

### 3. Cloudflare Pages dashboard

Workers & Pages → `buckley-ca` → Settings → Build & Deployments:

- [ ] Confirm build output dir shows `dist` (wrangler.toml now sets
      `pages_build_output_dir = "./dist"`, so it should pick this up).
- [ ] Remove any leftover `nodejs_compat` compatibility flag set in the dashboard — it's
      gone from wrangler.toml and is unnecessary for a static site.
- [ ] Confirm build command is `npm run build` (now runs `astro build`).

### 4. Live smoke check (after deploy succeeds)

On the deployed preview/production URL:

- [ ] `/` → h1 contains "buckley", "Home" nav bold, Cloudinary background loads
- [ ] `/contact` → "Contact" nav bold, form visible
- [ ] `/contact/` (trailing slash) → redirects to `/contact` (confirms `trailingSlash: 'never'`)
- [ ] `/nonexistent` → custom 404 page, NOT a Cloudflare/Vercel default error page
- [ ] Submit the contact form once → confirms Formspree still receives (endpoint
      `https://formspree.io/f/xdojdnkk` unchanged)

### 5. Merge + cleanup

- [ ] Merge PR to `master` once previews are green.
- [ ] Confirm production auto-deploys on both hosts from `master`.
- [ ] Delete the `migrate-sveltekit-to-astro` branch.

---

## TODO — For a future AI agent

### Context you need

- This is a 2-page static personal site. SvelteKit was used only as a build tool/router.
- Migration strategy was: full native Astro, no `@astrojs/svelte` integration. All 3
  components are now `.astro` files.
- Output is `output: 'static'` → `dist/`. No adapter. Both Cloudflare Pages and Vercel
  serve `dist/` natively via Git integration.
- **Environment caveat:** Claude Code on the web runs in an ephemeral cloud container.
  The container that did this work had **no git remote** and **GitHub egress was blocked
  by network policy** (proxy returned 403). Work was transferred to the user via a git
  bundle, which they pushed from their local machine. If you need to push and hit a 403
  from the proxy, that is an egress-policy denial — report it, do not route around it.

### If asked to continue the code work

First re-establish the baseline (container is fresh each session):

```bash
cd <repo> && git checkout migrate-sveltekit-to-astro
npm install
npm run check && npm run build && npx playwright test && npm run lint
```

All should pass. Then make changes.

### Known deviations from the original plan (intentional)

- **Tooling is Prettier-only.** ESLint was removed: the repo had eslint v10, which only
  supports flat config (`eslint.config.js`), but the migration kept the legacy
  `.eslintrc.cjs` — so `npm run lint`'s eslint half was broken. Given zero application
  logic on a 2-page static site, ESLint was dropped rather than migrated to flat config.
  `lint` is now `prettier --check .`. If reintroducing ESLint, use flat config.
- `.github/workflows/publish.yml` was **deleted** (not updated) — Cloudflare Pages Git
  integration handles deploys; the Action was a redundant second deploy.
- GitHub workflow YAML files (`dependabot.yml`, `dependency-review.yml`) got cosmetic
  Prettier reformatting (double→single quotes). Harmless; keeps `prettier --check` green.

### Refinements applied in commit d215008 (so you don't redo or revert them)

- `astro.config.mjs`: added `trailingSlash: 'never'` (matches prior SvelteKit URLs).
- `src/components/Header.astro`: active-link uses normalized path
  `Astro.url.pathname.replace(/\/$/, '') || '/'` to survive a host adding a trailing slash.
- `src/components/ContactForm.astro`: added Formspree `_subject` + `_captcha` hidden
  fields; `required` on inputs; honeypot `_gotcha` retained.
- `src/pages/index.astro` (1.5s fade) + `contact.astro` (0.5s fade): CSS `@keyframes`
  replacing Svelte `in:fade`, each with a `@media (prefers-reduced-motion: reduce)` reset.
- `wrangler.toml`: rewritten to `name` + `pages_build_output_dir = "./dist"` +
  `compatibility_date`; dropped `nodejs_compat`.
- `package.json`: dropped SvelteKit-era `overrides.cookie`.
- `tests/test.spec.js`: expanded from 1 assertion to 11 deterministic structural tests.
- `.gitignore` / `.prettierignore`: replaced SvelteKit paths with `dist/` + `.astro/`.

### Not implemented (was in plan, deliberately skipped or deferred)

- **Visual snapshot tests** were planned (component-level, Cloudinary mocked,
  reducedMotion) but only the structural tests were committed. The
  `prefers-reduced-motion` resets ARE in place, so adding snapshots later is low-friction:
  capture baseline with `npx playwright test --update-snapshots`, mock
  `**res.cloudinary.com**`, snapshot `.logo-container` / `.contact` (not full-page).
- The original plan's "clean wipe + fresh scaffold" was moot — migration was already
  committed when execution started; work proceeded as an audit-and-refine against the
  committed state.

### Astro 7 notes (verified during this work)

- `<slot />`, `output: 'static'`, `Astro.url`, `class:list` unchanged in v7.
- Rust compiler is stricter — the `<!-- svelte-ignore -->` comment was removed from
  `Logo.astro`. Keep all ported HTML valid.
- `compressHTML` default is now `'jsx'`. No functional impact here.
- Node 22 minimum (satisfied).

---

## Quick reference

| Item               | Value                                        |
| ------------------ | -------------------------------------------- |
| Branch             | `migrate-sveltekit-to-astro`                 |
| Base               | `92b24a4` (pre-migration SvelteKit `master`) |
| Formspree endpoint | `https://formspree.io/f/xdojdnkk`            |
| CF Pages project   | `buckley-ca`                                 |
| Dev/preview port   | `4321`                                       |
| Build output       | `dist/`                                      |
| Node minimum       | 22 (repo pins `^24.0.0`)                     |
