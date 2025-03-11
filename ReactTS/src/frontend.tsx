import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { Hook } from "./state";
import { Reducer } from "./reducer";
import { Context } from "./context";
import { Form } from "./callback"


const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
    <Hook />
    <Reducer />
    <Context />
    <Form />
  </StrictMode>
);
createRoot(elem).render(app)