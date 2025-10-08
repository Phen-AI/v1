import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if ("scrollRestoration" in window.history) {
  try {
    window.history.scrollRestoration = "manual";
  } catch {}
}

createRoot(document.getElementById("root")!).render(<App />);
