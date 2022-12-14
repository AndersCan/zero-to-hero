import { html, TemplateResult } from "lit-html";

export function Title(title: string, body: TemplateResult) {
  return html`<div
    class="slide-wrapper default-white border-gradient border-animation"
  >
    <div class="grid place-items-center my-bg h-full">
      <div class=" slide slide-xl">
        <h1>${title}</h1>
        ${body}
      </div>
    </div>
  </div>`;
}
