# buckley.ca

The official homepage of [buckley.ca](https://buckley.ca) — a small static
site built with [Astro](https://astro.build).

## Developing

This project uses [Vite+](https://viteplus.dev/guide/) (`vp`), a unified toolchain that wraps
Vite, Vitest, Oxlint and Oxfmt. Install the global `vp` CLI, then:

```bash
vp install
vp run dev

# or start the server and open the app in a new browser tab
vp run dev --open
```

The package manager is **pnpm** (pinned via `packageManager`; `corepack enable` provides it).
`vp install` delegates to pnpm, and plain `pnpm install` / `pnpm run <script>` work too — CI uses
pnpm directly.

## Scripts

`vp <name>` runs a **Vite+ built-in**; `vp run <name>` (alias `vpr`) runs the **`package.json`
script**. They are not interchangeable — use `vp run` for the scripts below.

| Command          | Description                                      |
| ---------------- | ------------------------------------------------ |
| `vp run dev`     | Start the Astro dev server                       |
| `vp run build`   | Build the production site to `dist/`             |
| `vp run preview` | Preview the production build locally             |
| `vp run check`   | Type-check `.astro` files (`astro check`)        |
| `vp run test`    | Run the Playwright end-to-end tests              |
| `vp run lint`    | Check formatting (Oxfmt + Prettier for `.astro`) |
| `vp run format`  | Apply formatting (Oxfmt + Prettier for `.astro`) |

Useful built-ins:

| Command            | Description                                                                        |
| ------------------ | ---------------------------------------------------------------------------------- |
| `vp check [--fix]` | Format (Oxfmt), lint (Oxlint) and type-check JS/TS in one pass                     |
| `vp test`          | Vitest unit tests — none yet, so it passes with no tests                           |
| `vp staged`        | Pre-commit hook (`.vite-hooks/pre-commit`) — runs `vp check --fix` on staged files |

> `vp test` is **not** the Playwright suite. `tests/` is excluded from Vitest in
> `vite.config.ts`; run end-to-end tests with `vp run test`.

## Building & deploying

```bash
vp run build
```

The site is fully static (`output: 'static'`) and is published to `dist/`.
Deploys are handled by the Cloudflare Pages Git integration — no adapter is
required.
