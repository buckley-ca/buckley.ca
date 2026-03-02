# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- **tests/test.js**: Fixed broken test - was expecting "Welcome to SvelteKit", now expects "buckley"
- **src/routes/+error.svelte**: Removed `@ts-nocheck`, added null-safe access `$page.error?.message ?? 'Unknown error'`
- **src/lib/ContactForm.svelte**: Added `required` attrs, `<label for>/<input id>` associations
- **src/lib/Logo.svelte**: Fixed `viewbox` → `viewBox` (camelCase), added a11y svelte-ignore

---

## AI Developer Notes

### Project Structure
- SvelteKit 5.x with Svelte 5 runes (`$state`, `$derived`, `$effect`)
- Cloudflare Workers deployment via Wrangler
- Pre-rendered static site (`prerender = true` in +layout.js)
- ESLint + Prettier for code quality

### Key Files
- `src/routes/+layout.svelte` - Main layout with background image
- `src/routes/+page.svelte` - Homepage with logo
- `src/routes/contact/+page.svelte` - Contact page with form
- `src/lib/ContactForm.svelte` - Formspree integration
- `src/lib/Logo.svelte` - SVG logo component

### Known Technical Debt
- Animation delays use `delay: 5` which is 5ms (likely intended as 5000ms for seconds)
- External background image URL should be moved to local/static assets
- Missing SEO meta tags (Open Graph, Twitter Cards)
- ESLint config may need updating for Svelte 5
- adapter-auto config has potentially conflicting route exclusions

### Environment Variables Needed
- None currently (Formspree URL is hardcoded)

### Testing
- Playwright tests in `tests/test.js`
- Run with `npm run test`

### Scripts
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run check` - Type checking
- `npm run lint` - Linting
- `npm run format` - Code formatting
