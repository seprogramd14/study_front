import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Game } from "./App";


const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <Game />
  </StrictMode>
);
createRoot(elem).render(app)