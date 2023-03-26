import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias({
      entries: [
        {
          find: "@assets",
          replacement: path.resolve(__dirname, "./src/assets"),
        },
        {
          find: "@components",
          replacement: path.resolve(__dirname, "./src/components"),
        },
        {
          find: "@utils",
          replacement: path.resolve(__dirname, "./src/utils"),
        },
        {
          find: "@hooks",
          replacement: path.resolve(__dirname, "./src/hooks"),
        },
        {
          find: "@services",
          replacement: path.resolve(__dirname, "./src/services"),
        },
        {
          find: "@api",
          replacement: path.resolve(__dirname, "./src/api"),
        },
      ],
    }),
    svgr(),
    react(),
  ],
});
