import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://buckley.ca",
  output: "static",
  trailingSlash: "never",
  // Emit flat files (dist/contact.html) rather than directories
  // (dist/contact/index.html). Cloudflare Pages redirects a directory route's
  // slashless URL to its trailing-slash form, which made the canonical URL we
  // publish (/contact, in both <link rel="canonical"> and the sitemap) a
  // redirect in Google's eyes. Flat files serve /contact directly and redirect
  // /contact/ to it, matching trailingSlash: "never".
  build: { format: "file" },
  integrations: [sitemap()],
});
