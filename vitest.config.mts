import { defineConfig } from "vitest/config";

// Route tests only: they run in Node, the same as the API routes on Vercel.
export default defineConfig({
  test: {
    environment: "node",
  },
});
