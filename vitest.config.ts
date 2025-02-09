// vitest.config.ts
import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "./app") }],
  },
});
