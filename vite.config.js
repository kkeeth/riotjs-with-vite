import { defineConfig } from "vite";
import riot from "rollup-plugin-riot";

export default defineConfig({
  root: process.cwd(),
  plugins: [riot()],
  build: {
    minify:
      "esbuild" /** https://vitejs.dev/config/build-options.html#build-minify */,
    target:
      "esnext" /** https://vitejs.dev/config/build-options.html#build-target */,
  },
});
