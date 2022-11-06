import { html, TemplateResult } from "lit-html";

export function RegularSlide(title: string, text: TemplateResult | string) {
  return html`<div class="slide-wrapper default-white">
    <div class="main center border-gradient border-animation">
      <div class="center slide slide-xl">
        <h1>${title}</h1>

        <div class="spacer"></div>

        ${typeof text === "string" ? html`<p>${text}</p>` : text}
      </div>
    </div>
  </div>`;
}
