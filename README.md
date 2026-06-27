# buckley.ca

The official homepage of [buckley.ca](https://www.buckley.ca) — a small static
site built with [Astro](https://astro.build).

## Developing

Install dependencies and start a development server:

```bash
npm install
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Scripts

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the local dev server                |
| `npm run build`   | Build the production site to `dist/`      |
| `npm run preview` | Preview the production build locally      |
| `npm run check`   | Type-check `.astro` files (`astro check`) |
| `npm run test`    | Run the Playwright end-to-end tests       |
| `npm run lint`    | Check formatting with Prettier            |
| `npm run format`  | Apply Prettier formatting                 |

## Building & deploying

```bash
npm run build
```

The site is fully static (`output: 'static'`) and is published to `dist/`.
Deploys are handled by the Cloudflare Pages Git integration — no adapter is
required.
