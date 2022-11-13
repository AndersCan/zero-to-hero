import "./style.css";
import "./grid.css";
import "./text.css";
import "./tooltip.css";
import "./trailer.css";
import "./background.css";

import { render } from "lit-html";
import { Main } from "./slides/slides";
import { activateTrailer } from "./trailer";
const renderRoot = document.getElementById("app");
if (!renderRoot) {
  throw new Error("missing #app");
}
render(Main(), renderRoot);

activateTrailer();
