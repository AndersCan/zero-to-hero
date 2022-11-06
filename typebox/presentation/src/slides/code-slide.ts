import { html, TemplateResult } from "lit-html";

export function CodeSlide(code: string) {
  return html`<div class="slide-wrapper">
    <div class="main border-gradient border-animation flex">
      <code-editor
        class="w-full h-full bg-red-200"
        .code="${code}"
      ></code-editor>
    </div>
  </div>`;
}
