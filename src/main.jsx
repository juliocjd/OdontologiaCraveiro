import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The build's prerender step (scripts/prerender.mjs) writes static markup
// for every route into #root, so the client hydrates instead of discarding
// and re-rendering it from scratch. Falls back to a plain client render in
// dev (vite dev serves the raw index.html with an empty #root).
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
