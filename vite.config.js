import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// @vitejs/plugin-react was already a devDependency but had no config wiring
// it in, so `npm run dev` was doing full page reloads on every edit instead
// of React Fast Refresh (which preserves component state across saves).
// This is dev-only: Vite's default JSX handling already covered the
// production build (client + SSR) correctly, so no build output changes.
export default defineConfig({
  plugins: [react()],
});
