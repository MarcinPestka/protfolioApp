// vitest.config.ts
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "./app") }],
  },
});
