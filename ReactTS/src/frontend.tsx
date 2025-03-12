import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";


const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
createRoot(elem).render(app)