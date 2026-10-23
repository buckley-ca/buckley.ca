import { expect, test } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  BACKGROUND_DESKTOP,
  BACKGROUND_DESKTOP_MEDIA,
  BACKGROUND_MOBILE,
  BACKGROUND_MOBILE_MEDIA,
  BACKGROUND_ORIGIN,
} from "../src/lib/background.js";

// Playwright builds the site and serves it with `astro preview` (see
// playwright.config.js), so these tests run against the real static output.

// --- Pages ---

for (const { path, title, h1, canonical } of [
  { path: "/", title: "Buckley.ca - Home", h1: "buckley", canonical: "https://buckley.ca/" },
  {
    path: "/contact",
    title: "Buckley.ca - Contact",
    h1: "Contact",
    canonical: "https://buckley.ca/contact",
  },
]) {
  test(`${path} has its title, heading, description and active nav link`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveTitle(title);
    await expect(page.locator("h1")).toContainText(h1);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Buckley/i);
    await expect(page.locator(`li.active a[href="${path}"]`)).toBeVisible();
  });

  // Canonical URLs use the apex domain (www redirects to it) and no ".html".
  test(`${path} canonical URL is the apex, extensionless`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", canonical);
  });
}

test("contact form has email, message and submit, and posts to Formspree", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator('textarea[name="message"]')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();
  await expect(page.locator("form")).toHaveAttribute("action", /formspree/);
});

test("404 page links back home", async ({ page }) => {
  await page.goto("/404");
  await expect(page.locator("h1")).toContainText("404");
  await expect(page.locator('.links a[href="/"]')).toBeVisible();
});

// --- SEO and metadata ---

test("home page has JSON-LD structured data", async ({ page }) => {
  await page.goto("/");
  const ld = await page.locator('script[type="application/ld+json"]').textContent();
  const types = JSON.parse(ld)["@graph"].map((node) => node["@type"]);
  expect(types).toContain("WebSite");
  expect(types).toContain("Person");
});

test("home page has og:image with alt and dimensions", async ({ page }) => {
  await page.goto("/");
  const meta = (property) => page.locator(`meta[property="${property}"]`);
  await expect(meta("og:image")).toHaveAttribute("content", "https://buckley.ca/og.png");
  await expect(meta("og:image:width")).toHaveAttribute("content", "1200");
  await expect(meta("og:image:height")).toHaveAttribute("content", "630");
  await expect(meta("og:image:alt")).toHaveAttribute("content", /buckley/i);
});

// scripts/flatten-sitemap.mjs turns the plugin's sitemap index into a single
// sitemap.xml, which is what robots.txt points to.
test("sitemap.xml is a flat urlset listing site pages", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body).toContain("<urlset");
  expect(body).not.toContain("<sitemapindex");
  // Parse each <loc> as a URL so "https://buckley.ca" and "https://buckley.ca/"
  // compare equal (the plugin's output varies between Node versions).
  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).href);
  expect(locs).toEqual(["https://buckley.ca/", "https://buckley.ca/contact"]);
});

// `build.format: "file"` (astro.config.mjs) emits dist/contact.html so
// Cloudflare serves /contact directly instead of redirecting to /contact/.
test("pages build as flat files, not directories", () => {
  const dist = fileURLToPath(new URL("../dist", import.meta.url));
  expect(existsSync(join(dist, "contact.html"))).toBeTruthy();
  expect(existsSync(join(dist, "contact", "index.html"))).toBeFalsy();
});

test("llms.txt is served and describes the site", async ({ request }) => {
  const res = await request.get("/llms.txt");
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body).toContain("# buckley.ca");
  expect(body).toContain("https://buckley.ca/contact");
});

// --- Security headers (public/_headers) ---

// Parse public/_headers into { "<path pattern>": { header: value } }.
function parseHeaders() {
  const text = readFileSync(fileURLToPath(new URL("../public/_headers", import.meta.url)), "utf8");
  const map = {};
  let path = null;
  for (const line of text.split(/\r?\n/)) {
    if (line.startsWith("#")) continue;
    if (line.startsWith("/")) {
      path = line.trim();
      map[path] ??= {};
      continue;
    }
    const m = path && line.match(/^\s+([A-Za-z-]+):\s*(.+)$/);
    if (m) map[path][m[1]] = m[2].trim();
  }
  return map;
}

const siteHeaders = parseHeaders()["/*"];
const csp = siteHeaders["Content-Security-Policy"];

test("security headers carry the expected hardening", () => {
  expect(siteHeaders["X-Content-Type-Options"]).toBe("nosniff");
  expect(siteHeaders["X-Frame-Options"]).toBe("DENY");
  expect(siteHeaders["Referrer-Policy"]).toBe("strict-origin-when-cross-origin");
  expect(siteHeaders["Cross-Origin-Opener-Policy"]).toBe("same-origin");

  // At least six months, matching Cloudflare's dashboard HSTS setting.
  const hsts = siteHeaders["Strict-Transport-Security"];
  expect(Number(hsts.match(/max-age=(\d+)/)[1])).toBeGreaterThanOrEqual(15768000);
  expect(hsts).toMatch(/includeSubDomains/);
  expect(hsts).toMatch(/preload/);

  // script-src is the directive that matters most: our own scripts plus the
  // Cloudflare analytics beacon, never 'unsafe-inline', 'unsafe-eval' or "*".
  const directives = Object.fromEntries(
    csp
      .split(";")
      .map((d) => d.trim().split(/\s+/))
      .map(([name, ...values]) => [name, values]),
  );
  expect(directives["script-src"]).toEqual(["'self'", "https://static.cloudflareinsights.com"]);
  expect(directives["connect-src"]).toEqual(["'self'", "https://cloudflareinsights.com"]);
  expect(directives["object-src"]).toEqual(["'none'"]);
  expect(directives["base-uri"]).toEqual(["'self'"]);
  expect(directives["frame-ancestors"]).toEqual(["'none'"]);
});

// `astro preview` doesn't apply _headers, so add the CSP to each page response
// ourselves and fail if the browser blocks anything. This catches a new
// third-party resource that the policy doesn't allow yet.
for (const path of ["/", "/contact"]) {
  test(`no CSP violations on ${path}`, async ({ page }) => {
    const violations = [];
    page.on("console", (msg) => {
      if (/Content Security Policy/i.test(msg.text())) violations.push(msg.text());
    });
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

// --- Background preload (src/lib/background.js) ---

// Fractional widths like 640.5px match neither `max-width: 640px` nor
// `min-width: 641px`, so the desktop query must be the exact negation of the
// mobile one. Playwright can't set fractional widths, so check the string.
test("the two preload media queries leave no gap", () => {
  expect(BACKGROUND_DESKTOP_MEDIA).toBe(`not all and ${BACKGROUND_MOBILE_MEDIA}`);
});

test("preloads point at the background images with high priority", async ({ page }) => {
  await page.goto("/");
  const mobile = page.locator(`link[rel="preload"][media="${BACKGROUND_MOBILE_MEDIA}"]`);
  const desktop = page.locator(`link[rel="preload"][media="${BACKGROUND_DESKTOP_MEDIA}"]`);
  await expect(mobile).toHaveAttribute("href", BACKGROUND_MOBILE);
  await expect(desktop).toHaveAttribute("href", BACKGROUND_DESKTOP);
  for (const link of [mobile, desktop]) {
    await expect(link).toHaveAttribute("as", "image");
    await expect(link).toHaveAttribute("fetchpriority", "high");
  }
  await expect(page.locator(`link[rel="preconnect"][href="${BACKGROUND_ORIGIN}"]`)).toHaveCount(1);
});

// At each width exactly one preload should match, and it should be the image
// the page actually paints. 640 and 641 sit either side of the breakpoint.
for (const width of [412, 640, 641, 1440]) {
  test(`preloads exactly the painted background at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto("/");
    const { matched, painted } = await page.evaluate(() => {
      const links = [...document.querySelectorAll('link[rel="preload"][as="image"]')];
      return {
        matched: links.filter((l) => matchMedia(l.media).matches).map((l) => l.href),
        painted: getComputedStyle(document.querySelector(".background")).backgroundImage,
      };
    });
    expect(matched).toHaveLength(1);
    expect(painted).toContain(matched[0]);
  });
}
