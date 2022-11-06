import { html } from "lit-html";

export function Title() {
  return html`<div class="slide-wrapper default-white">
    <div class="main center border-gradient border-animation">
      <div class="center slide slide-xl">
        <h1>TypeBox</h1>
        <p>
          <em>JSON Schema</em> Type Builder with <em>Static Type</em> Resolution
          for TypeScript
        </p>
        <div class="spacer"></div>
        <small> Anders Olav Candasamy</small>
      </div>
    </div>
  </div>`;
}
