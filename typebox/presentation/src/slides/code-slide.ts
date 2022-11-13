import { html } from "lit-html";

export function CodeSlide(code: string) {
  return html`<div class="slide-wrapper">
    <div class="border-gradient border-animation">
      <code-editor class=" bg-red-200" .code="${code}"></code-editor>
    </div>
  </div>`;
}
