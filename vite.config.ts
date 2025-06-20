import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// 👇 Add this: set the correct base path to match your GitHub repo name
const repoName = "green-growers-grid";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
