/* @refresh reload */
import { render } from "solid-js/web";
import { Router, hashIntegration } from "@solidjs/router";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  root!
);
