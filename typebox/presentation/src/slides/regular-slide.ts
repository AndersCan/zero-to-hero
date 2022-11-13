import { html, TemplateResult } from "lit-html";

export function RegularSlide(title: string, text: TemplateResult | string) {
  return html`<div
    class="slide-wrapper default-white border-gradient border-animation"
  >
    <div class="flex flex-col my-bg h-full">
      <h1 class="text-lg tracking-widest ml-4 lowercase font-extralight">
        ${title}
      </h1>
      <hr class="border-dotted" />

      <div class="grid h-full place-items-center text-xl">
        ${typeof text === "string" ? html`<p>${text}</p>` : text}
      </div>
    </div>
  </div>`;
}
