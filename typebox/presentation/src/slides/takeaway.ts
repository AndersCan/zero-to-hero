import { html, TemplateResult } from "lit-html";

export function Takeaway(title: TemplateResult) {
  return html`<div
    class="slide-wrapper default-white border-gradient border-animation"
  >
    <div class="grid place-items-center my-bg h-full">
      <div class="slide slide-xl">${title}</div>
    </div>
  </div>`;
}
