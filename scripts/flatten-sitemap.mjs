// Post-build step: @astrojs/sitemap always emits `sitemap-index.xml` plus one
// or more `sitemap-<n>.xml` chunks. This site is tiny and will only ever have a
// single chunk (the sitemaps.org limit is 50,000 URLs per file), so the index
// is redundant. We promote the single chunk to a flat, conventionally-named
// `dist/sitemap.xml` (which robots.txt already references) and drop the index.
//
// If the site ever grows past one chunk this script fails loudly — at that point
// keep the plugin's native output and point robots.txt at sitemap-index.xml.

import { readdir, rename, rm } from "node:fs/promises";
import { join } from "node:path";

const dist = "dist";
const files = await readdir(dist);
const chunks = files.filter((f) => /^sitemap-\d+\.xml$/.test(f)).sort();

if (chunks.length === 0) {
  throw new Error(
    "flatten-sitemap: no sitemap chunk found in dist/. Did the @astrojs/sitemap integration run?",
  );
}

if (chunks.length > 1) {
  throw new Error(
    `flatten-sitemap: found ${chunks.length} sitemap chunks (${chunks.join(", ")}). ` +
      "The site no longer fits in a single sitemap. Remove this post-build step and " +
      "point robots.txt at sitemap-index.xml instead.",
  );
}

await rename(join(dist, chunks[0]), join(dist, "sitemap.xml"));
await rm(join(dist, "sitemap-index.xml"), { force: true });

console.log("flatten-sitemap: wrote dist/sitemap.xml (flat urlset) and removed the sitemap index.");
