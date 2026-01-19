import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QuranProvider } from "./context/QuranContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuranProvider>
      <App />
    </QuranProvider>
  </StrictMode>
);
