/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  webServer: {
    // CI builds in its own step first, so only start the preview server there.
    // Locally, build first so the tests always run against fresh output.
    command: process.env.CI ? "pnpm run preview" : "pnpm run build && pnpm run preview",
    port: 4321,
  },
};

export default config;
