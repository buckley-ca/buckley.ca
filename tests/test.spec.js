import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

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
  expect(body).toContain("<loc>https://www.buckley.ca</loc>");
  expect(body).toContain("<loc>https://www.buckley.ca/contact</loc>");
});

test("llms.txt is served and describes the site", async ({ request }) => {
  const res = await request.get("/llms.txt");
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body).toContain("# buckley.ca");
  expect(body).toContain("https://www.buckley.ca/contact");
});

test("home page has og:image with alt and dimensions", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://www.buckley.ca/og.png",
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
// Parse the `/*` rule of public/_headers into a { header: value } map.
function parseCloudflareHeaders() {
  const text = readFileSync(fileURLToPath(new URL("../public/_headers", import.meta.url)), "utf8");
  const map = {};
  let inRule = false;
  for (const line of text.split("\n")) {
    if (line.startsWith("/")) {
      inRule = true;
      continue;
    }
    if (!inRule) continue;
    const m = line.match(/^\s+([A-Za-z-]+):\s*(.+)$/);
    if (m) map[m[1]] = m[2].trim();
  }
  return map;
}

// Flatten vercel.json's headers config into the same { header: value } map.
function parseVercelHeaders() {
  const json = JSON.parse(
    readFileSync(fileURLToPath(new URL("../vercel.json", import.meta.url)), "utf8"),
  );
  const map = {};
  for (const rule of json.headers ?? []) {
    for (const h of rule.headers ?? []) map[h.key] = h.value.trim();
  }
  return map;
}

const cloudflareHeaders = parseCloudflareHeaders();
const csp = cloudflareHeaders["Content-Security-Policy"];

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

  expect(vercelHeaders).toEqual(cloudflareHeaders);
});

// The headers above are the ones that actually matter, so assert their content
// rather than only that the two hosts agree on it — two identically-wrong files
// would satisfy the drift check.
test("security headers carry the expected hardening", () => {
  expect(cloudflareHeaders["X-Content-Type-Options"]).toBe("nosniff");
  expect(cloudflareHeaders["X-Frame-Options"]).toBe("DENY");
  expect(cloudflareHeaders["Referrer-Policy"]).toBe("strict-origin-when-cross-origin");
  expect(cloudflareHeaders["Cross-Origin-Opener-Policy"]).toBe("same-origin");

  // At least a year. `includeSubDomains` and `preload` are deliberately absent
  // (see public/_headers) — assert that rather than just omitting the check, so
  // adding either is a conscious edit here and not a silent one-way commitment.
  const hsts = cloudflareHeaders["Strict-Transport-Security"];
  expect(Number(hsts.match(/max-age=(\d+)/)[1])).toBeGreaterThanOrEqual(31536000);
  expect(hsts).not.toMatch(/includeSubDomains/);
  expect(hsts).not.toMatch(/preload/);

  // script-src is the directive worth pinning: no 'unsafe-inline'/'unsafe-eval',
  // no wildcard host. Everything else is intentionally permissive (see _headers).
  const directives = Object.fromEntries(
    cloudflareHeaders["Content-Security-Policy"]
      .split(";")
      .map((d) => d.trim().split(/\s+/))
      .map(([name, ...values]) => [name, values]),
  );
  expect(directives["script-src"]).toEqual(["'self'"]);
  expect(directives["object-src"]).toEqual(["'none'"]);
  expect(directives["base-uri"]).toEqual(["'self'"]);
  expect(directives["frame-ancestors"]).toEqual(["'none'"]);
});

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
