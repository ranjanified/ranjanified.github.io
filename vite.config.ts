import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), svelte()],
  // base: "/src",
  // root: "src",
  build: {
    manifest: true,
    emptyOutDir: true,
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: {
        bootstrapper:  resolve(__dirname,"src", "bootstrapper.ts"),
      },
      output: {
        entryFileNames: ({ name }) => {
          console.log("Module Name", name);
          if (name === "bootstrapper") {
            return "[name].js";
          }
          return "assets/[name]-[hash].js";
        },
      },
    },
  },
});
