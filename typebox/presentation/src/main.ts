import "./style.css";

import { render } from "lit-html";
import { Main } from "./slides/slides";

const renderRoot = document.getElementById("app");
if (!renderRoot) {
  throw new Error("missing #app");
}
render(Main(), renderRoot);
