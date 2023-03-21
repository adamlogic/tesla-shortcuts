import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // https://miniflare.dev/testing/vitest
    environment: "miniflare",
  },
});
