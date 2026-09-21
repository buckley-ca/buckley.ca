import { expect, test } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { BACKGROUND_DESKTOP, BACKGROUND_MOBILE, BACKGROUND_ORIGIN } from "../src/lib/background.js";

// --- Structural assertions (primary gate, deterministic) ---

test("home page h1 contains buckley", async ({ page }) => {
  await page.goto("/");
  await page.locator("h1").waitFor({ state: "visible" });
  expect(await page.locator("h1").textContent()).toContain("buckley");
});

test("home page title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Buckley.ca - Home");
});

test("contact page title", async ({ page }) => {
  await page.goto("/contact");
  await expect(page).toHaveTitle("Buckley.ca - Contact");
});

test("nav has home and contact links", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('nav a[href="/"]')).toBeVisible();
  await expect(page.locator('nav a[href="/contact"]')).toBeVisible();
});

test("home nav link is active on /", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('li.active a[href="/"]')).toBeVisible();
});

test("contact nav link is active on /contact", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator('li.active a[href="/contact"]')).toBeVisible();
});

test("contact page h1 contains Contact", async ({ page }) => {
  await page.goto("/contact");
  await page.locator("h1").waitFor({ state: "visible" });
  expect(await page.locator("h1").textContent()).toContain("Contact");
});

test("contact form has email, message, submit", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator('textarea[name="message"]')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();
});

test("contact form posts to Formspree", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("form")).toHaveAttribute("action", /formspree/);
});

test("home page meta description", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Buckley/i);
});

test("contact page meta description", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Buckley/i);
});

test("home page has JSON-LD structured data", async ({ page }) => {
  await page.goto("/");
  const ld = await page.locator('script[type="application/ld+json"]').textContent();
  const data = JSON.parse(ld);
  expect(data["@graph"].map((n) => n["@type"])).toContain("WebSite");
  expect(data["@graph"].map((n) => n["@type"])).toContain("Person");
});

test("sitemap.xml is a flat urlset listing site pages", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body).toContain("<urlset");
  expect(body).not.toContain("<sitemapindex");
  // Compare the <loc>s as URLs, not as strings: @astrojs/sitemap emits the home
  // entry as a bare origin on Node 22 and with a trailing slash on Node 24 (the
  // version this repo requires), and both name the same page. Normalizing
  // through the URL parser keeps the assertion about *which* pages are listed.
  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).href);
  expect(locs).toEqual(["https://buckley.ca/", "https://buckley.ca/contact"]);
});

// The site publishes slashless, extensionless URLs (canonical tag, sitemap,
// llms.txt, nav). Cloudflare Pages redirects a directory route's slashless URL
// to its trailing-slash form, so `build.format: "file"` is what keeps those
// published URLs from being redirects — which is exactly what Search Console
// flagged. Assert the built output stays flat.
test("pages build as flat files, not directories", () => {
  const dist = fileURLToPath(new URL("../dist", import.meta.url));
  expect(existsSync(join(dist, "contact.html"))).toBeTruthy();
  expect(existsSync(join(dist, "contact", "index.html"))).toBeFalsy();
});

// Canonical URLs must name the host that actually serves 200s: www.buckley.ca
// 301s to the apex, so publishing www URLs made every canonical a redirect.
for (const [path, canonical] of [
  ["/", "https://buckley.ca/"],
  ["/contact", "https://buckley.ca/contact"],
]) {
  test(`canonical URL on ${path} is the apex, extensionless`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", canonical);
  });
}

test("llms.txt is served and describes the site", async ({ request }) => {
  const res = await request.get("/llms.txt");
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body).toContain("# buckley.ca");
  expect(body).toContain("https://buckley.ca/contact");
});

test("home page has og:image with alt and dimensions", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://buckley.ca/og.png",
  );
  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute("content", "1200");
  await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute("content", "630");
  await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute(
    "content",
    /buckley/i,
  );
});

// --- CSP drift guard ---
// Read the real policy from public/_headers so this test always reflects what
// ships. Load each page with that CSP applied to the document response and fail
// if the browser reports any violation — i.e. if the site ever loads a resource
// the policy doesn't allow (a new third-party script, font, image host, etc.),
// CI goes red at PR time instead of the site silently breaking in production.
// Parse public/_headers into { "<path pattern>": { header: value } }. Keying by
// path (not one flat map) matters now that different paths carry different
// Cache-Control values — a flat map would let the last rule win and hide a
// mismatch between the two hosts.
function parseCloudflareHeaders() {
  const text = readFileSync(fileURLToPath(new URL("../public/_headers", import.meta.url)), "utf8");
  const map = {};
  let path = null;
  for (const line of text.split("\n")) {
    if (line.startsWith("#")) continue;
    if (line.startsWith("/")) {
      path = line.trim();
      map[path] ??= {};
      continue;
    }
    if (!path) continue;
    const m = line.match(/^\s+([A-Za-z-]+):\s*(.+)$/);
    if (m) map[path][m[1]] = m[2].trim();
  }
  return map;
}

// Flatten vercel.json's headers config into the same shape. Vercel matches with
// a regex (`/(.*)`) where Cloudflare uses a glob (`/*`); normalize to the glob
// so the two are comparable.
function parseVercelHeaders() {
  const json = JSON.parse(
    readFileSync(fileURLToPath(new URL("../vercel.json", import.meta.url)), "utf8"),
  );
  const map = {};
  for (const rule of json.headers ?? []) {
    const path = rule.source.replace(/\(\.\*\)/g, "*");
    map[path] ??= {};
    for (const h of rule.headers ?? []) map[path][h.key] = h.value.trim();
  }
  return map;
}

const cloudflareHeaders = parseCloudflareHeaders();
const siteHeaders = cloudflareHeaders["/*"];
const csp = siteHeaders["Content-Security-Policy"];

// Cloudflare (_headers) and Vercel (vercel.json) are separate files; keep them
// in lockstep so a header changed in one host isn't forgotten in the other.
// Compare the full header maps rather than a hand-listed subset — otherwise a
// header added to one file and missing from the other slips through simply
// because nobody remembered to add its name to the list here too.
test("vercel.json security headers match public/_headers", () => {
  const vercelHeaders = parseVercelHeaders();

  // Guard the parsers themselves: an empty map would make the comparison below
  // pass vacuously if either file's format ever changes.
  expect(Object.keys(cloudflareHeaders).length).toBeGreaterThan(0);
  expect(Object.keys(siteHeaders).length).toBeGreaterThan(0);

  expect(vercelHeaders).toEqual(cloudflareHeaders);
});

// The headers above are the ones that actually matter, so assert their content
// rather than only that the two hosts agree on it — two identically-wrong files
// would satisfy the drift check.
test("security headers carry the expected hardening", () => {
  expect(siteHeaders["X-Content-Type-Options"]).toBe("nosniff");
  expect(siteHeaders["X-Frame-Options"]).toBe("DENY");
  expect(siteHeaders["Referrer-Policy"]).toBe("strict-origin-when-cross-origin");
  expect(siteHeaders["Cross-Origin-Opener-Policy"]).toBe("same-origin");

  // Mirror Cloudflare's edge-injected HSTS (see public/_headers): Cloudflare's
  // dashboard HSTS overrides this file live, so the repo tracks its value rather
  // than a value that never ships. `includeSubDomains` and `preload` are part of
  // that default; assert them so dropping either is a conscious edit here.
  // Six months (15768000) — Cloudflare's recommended setting, and what the
  // dashboard is configured to inject. The edge value overrides this file, so
  // the two must agree: if the dashboard's HSTS (SSL/TLS -> Edge Certificates)
  // ever moves, move this with it. Floor, not equality, so raising the duration
  // (e.g. to one year for preload-list eligibility) doesn't fail the suite.
  const hsts = siteHeaders["Strict-Transport-Security"];
  expect(Number(hsts.match(/max-age=(\d+)/)[1])).toBeGreaterThanOrEqual(15768000);
  expect(hsts).toMatch(/includeSubDomains/);
  expect(hsts).toMatch(/preload/);

  // script-src is the directive worth pinning: no 'unsafe-inline'/'unsafe-eval',
  // no wildcard host. Everything else is intentionally permissive (see _headers).
  const directives = Object.fromEntries(
    siteHeaders["Content-Security-Policy"]
      .split(";")
      .map((d) => d.trim().split(/\s+/))
      .map(([name, ...values]) => [name, values]),
  );
  // script-src may name explicit third-party origins (Cloudflare's edge-injected
  // Web Analytics beacon), but never 'unsafe-inline', 'unsafe-eval' or a wildcard.
  expect(directives["script-src"]).toEqual(["'self'", "https://static.cloudflareinsights.com"]);
  for (const value of directives["script-src"]) {
    expect(value).not.toMatch(/unsafe-inline|unsafe-eval|^\*|^https?:$/);
  }
  expect(directives["connect-src"]).toEqual(["'self'", "https://cloudflareinsights.com"]);
  expect(directives["object-src"]).toEqual(["'none'"]);
  expect(directives["base-uri"]).toEqual(["'self'"]);
  expect(directives["frame-ancestors"]).toEqual(["'none'"]);
});

// --- LCP preload ---
// The Cloudinary background is the LCP element and lives only in CSS, so the
// browser can't discover it from the HTML. Layout.astro preloads it at high
// priority; these assert the preload is there and — crucially — that the URL it
// names is byte-identical to the one the CSS paints. A mismatch wouldn't fail
// visibly, it would just download the background twice, which is worse than not
// preloading at all.
for (const path of ["/", "/contact"]) {
  test(`${path} preloads the background at high priority`, async ({ page }) => {
    await page.goto(path);

    const mobile = page.locator('link[rel="preload"][media*="max-width"]');
    const desktop = page.locator('link[rel="preload"][media*="min-width"]');

    for (const link of [mobile, desktop]) {
      await expect(link).toHaveAttribute("as", "image");
      await expect(link).toHaveAttribute("fetchpriority", "high");
    }

    await expect(mobile).toHaveAttribute("href", BACKGROUND_MOBILE);
    await expect(desktop).toHaveAttribute("href", BACKGROUND_DESKTOP);

    await expect(page.locator(`link[rel="preconnect"][href="${BACKGROUND_ORIGIN}"]`)).toHaveCount(
      1,
    );
  });

  test(`${path} paints exactly the background URLs it preloads`, async ({ page }) => {
    await page.goto(path);

    // Layout.astro defines the two URLs once as :root custom properties, which
    // is what the .background rule resolves. Reading them back proves the CSS
    // and the preloads share one source of truth.
    const vars = await page.evaluate(() => {
      const style = getComputedStyle(document.documentElement);
      return {
        mobile: style.getPropertyValue("--background-mobile").trim(),
        desktop: style.getPropertyValue("--background-desktop").trim(),
      };
    });

    expect(vars.mobile).toContain(BACKGROUND_MOBILE);
    expect(vars.desktop).toContain(BACKGROUND_DESKTOP);
  });
}

for (const path of ["/", "/contact"]) {
  test(`no CSP violations on ${path}`, async ({ page }) => {
    const violations = [];
    page.on("console", (msg) => {
      if (/Content Security Policy/i.test(msg.text())) violations.push(msg.text());
    });
    // Apply the real CSP to the navigated document; let subresources load normally.
    await page.route("**/*", async (route) => {
      if (route.request().resourceType() === "document") {
        const res = await route.fetch();
        await route.fulfill({
          response: res,
          headers: { ...res.headers(), "content-security-policy": csp },
        });
      } else {
        await route.continue();
      }
    });
    await page.goto(path, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);
    expect(violations, violations.join("\n")).toEqual([]);
  });
}
