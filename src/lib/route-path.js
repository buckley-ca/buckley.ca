// With `build.format: "file"` Astro emits flat files (dist/contact.html) so the
// Cloudflare Pages edge can serve /contact directly instead of 308-redirecting
// it to /contact/ — but during the build `Astro.url.pathname` then carries the
// output filename (/contact.html, /index.html) rather than the URL we publish.
// Normalize it back to the canonical, extensionless path used in <link rel=
// "canonical">, the sitemap, and the nav's active state.
export function routePath(pathname) {
  return (
    pathname
      .replace(/\/index\.html$/, "/")
      .replace(/\.html$/, "")
      .replace(/(.)\/$/, "$1") || "/"
  );
}
