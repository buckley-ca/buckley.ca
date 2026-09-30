import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  fmt: {
    printWidth: 100,
    sortPackageJson: false,
    ignorePatterns: [
      ".DS_Store",
      "node_modules",
      "dist/",
      ".astro/",
      "test-results/",
      "playwright-report/",
      ".env",
      ".env.*",
      "!.env.example",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
    ],
  },
});
