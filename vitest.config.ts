/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig({
  ...(viteConfig as any),
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    exclude: ["**/node_modules/**", "**/dist/**"],
  },
});
