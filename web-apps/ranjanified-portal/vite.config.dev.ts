import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log("Mode:", mode);
  return {
    plugins: [tsconfigPaths(), svelte()],
    root: "src",
    build: {
      rollupOptions: {
        preserveEntrySignatures: "strict",
        input: {
          index: "./src/index.html"
        },
      },
    },
  };
});
