/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  webServer: {
    command: "npm run build && npm run preview",
    port: 4321,
  },
  use: {
    launchOptions: {
      executablePath: '/opt/pw-browsers/chromium',
    },
  },
};

export default config;
