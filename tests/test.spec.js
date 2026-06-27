import { expect, test } from "@playwright/test";

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
