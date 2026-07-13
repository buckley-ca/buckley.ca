# CLAUDE.md — buckley.ca

Personal static site: **Astro** (`output: 'static'`) → **Cloudflare Pages** (Git integration, no
adapter). See [README.md](README.md) for the full script list.

## Stack & commands

- Package manager: **npm** (not pnpm). Node **≥ 22** — run `nvm use 24.13.0` first if the shell
  defaults lower.
- `npm run dev` · `npm run build` (→ `dist/`) · `npm run preview`.
- Before calling a change done: `npm run check` (astro type-check), `npm run test` (Playwright),
  `npm run lint` (Prettier).
- The owner usually runs dev via `vp run dev` (vite-plus) — fine to assume that works locally.

## Conventions

- Keep it a simple static site — no SSR/CMS, minimal dependencies; anything fancier must earn it.
- Git (commits, branches, PRs) follows the global `~/.claude/CLAUDE.md`.
