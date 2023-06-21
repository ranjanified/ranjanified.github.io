import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), svelte()],
  base: "/web-assets/ranjanified-portal/",
  // root: "src",
  build: {
    manifest: true,
    // ssrManifest: true,
    emptyOutDir: true,
    outDir: "../../web-assets/ranjanified-portal",
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: {
        app: "./index.html",
        bootstrapper: "./src/bootstrapper.ts"
      },
    },
  },
});
