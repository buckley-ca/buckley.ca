import { defineConfig } from "vite-plus";

export default defineConfig({
  // Playwright runs separately from Vitest.
  test: {
    exclude: ["**/node_modules/**", "tests/**"],
    passWithNoTests: true,
  },
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  fmt: {
    astro: true,
  },
});
