# Code review findings (2026-03-02)

Archived from `CHANGELOG.md`. Written against the SvelteKit version of the site, before the
Astro 7 migration (2026-06-26); file paths refer to that codebase.

## High Priority

| Issue                   | File                       | Fix      |
| ----------------------- | -------------------------- | -------- |
| Broken test             | tests/test.js              | ✅ Fixed |
| @ts-nocheck unsafe      | src/routes/+error.svelte   | ✅ Fixed |
| Missing form validation | src/lib/ContactForm.svelte | ✅ Fixed |

## Medium Priority

| Issue                   | File                               | Recommendation                  |
| ----------------------- | ---------------------------------- | ------------------------------- |
| Missing OG/Twitter meta | +layout.svelte, +page.svelte       | Add og:\*, twitter:card tags    |
| Animation timing off    | +page.svelte, contact/+page.svelte | ✅ Fixed                        |
| External background     | +layout.svelte                     | Host locally in static/         |
| CLS on header           | Header.svelte                      | Use px instead of vh for height |
| Missing skip nav        | Header.svelte                      | Add skip link for a11y          |

## Low Priority

| Issue                       | File               | Recommendation                      |
| --------------------------- | ------------------ | ----------------------------------- |
| Missing sitemap, robots.txt | root               | Add static/sitemap.xml, robots.txt  |
| Missing PWA icons           | static             | Add apple-touch-icon, manifest.json |
| Duplicate CSS               | +layout.svelte     | Consolidate background-size rules   |
| Hardcoded Formspree URL     | ContactForm.svelte | Move to env var                     |
