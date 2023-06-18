import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(), svelte()],
    root: "src",
    build: {
	outDir: "../dist",
	emptyOutDir: true,
	rollupOptions: {
	    input: "./src/index.html",
	    output: {
		chunkFileNames: "[name].js",
		entryFileNames: "[name].js",
		assetFileNames: "[name].[ext]"
	    },
	},
    },
});
