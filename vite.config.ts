import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    lib: {
      entry: "main.ts",
      fileName: "main",
      name: "designPrimitives",
    },
  },
});
