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
function readCsp() {
  const headersPath = fileURLToPath(new URL("../public/_headers", import.meta.url));
  const text = readFileSync(headersPath, "utf8");
  const match = text.match(/^\s*Content-Security-Policy:\s*(.+)$/m);
  if (!match) throw new Error("Content-Security-Policy not found in public/_headers");
  return match[1].trim();
}
const csp = readCsp();

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
