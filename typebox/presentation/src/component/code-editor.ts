import { SandpackClient } from "@codesandbox/sandpack-client";
import { render, html } from "lit-html";
import { initEditor } from "./codemirror";
import { debounce } from "../utils/debounce";

export class CodeEditor extends HTMLElement {
  iframeId = "woopwoop";
  // iframeId = `${Math.random()}`.slice(-5);
  client: SandpackClient | undefined;
  code = "";

  connectedCallback() {
    const debouncex = debounce(this.onCodeChange.bind(this), 1000);
    this.setup();
    // requestAnimationFrame(callback)
    requestAnimationFrame(() => {
      const el = this.querySelector<HTMLElement>("[data-editor]");
      if (!el) {
        throw new Error("missing container");
      }
      //
      initEditor(el, this.code, (code) => this.onCodeChange(code));

      // There are two ways of initializing a preview, you can give it either an
      // iframe element or a selector of an element to create an iframe on.
      this.client = new SandpackClient(
        `#${this.iframeId}`, // iframe selector or element itself
        {
          files: {
            "/index.html": {
              code: `<div id="app"></div>`,
            },
            "/utils.ts": {
              code: `export function log(tolog){
                let asString = typeof tolog === 'function' ? tolog.toString() : JSON.stringify(tolog, null,2)
                document.getElementById(
                "app"
              ).innerHTML = "<pre>" + asString + "</pre>"}`,
            },
            "/index.ts": {
              code: this.code,
            },
          },
          entry: "/index.ts",
          dependencies: {
            "@sinclair/typebox": "latest",
          },
        },
        { bundlerURL: `https://1-12-1-sandpack.codesandbox.io/` }
      );
    });
  }
  setup() {
    render(
      html`
        <div class="main border-gradient border-animation flex">
          <div
            data-editor="container"
            class="bg-[#43373E] text-[#F5FFFA] w-full h-full slide-normal"
          ></div>
          <div class="spacer"></div>
          <iframe
            class="slide-normal+ min-w-[50%]"
            id="${this.iframeId}"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </div>
      `,
      this
    );
  }

  onCodeChange(code: string) {
    console.log("onCodeChange", code);

    // When you make a change you can just run `updatePreview`,
    // we'll automatically discover  which files have changed
    // and hot reload them.
    if (!this.client) {
      throw new Error("client not set");
    }
    this.client.updatePreview({
      files: {
        "/index.html": {
          code: `<div id="app" style="font-size: 3.5vh"></div>`,
        },
        "/utils.ts": {
          code: `export function log(tolog){document.getElementById(
            "app"
          ).innerHTML = "<pre>" + JSON.stringify(tolog, null,2) + "</pre>"}`,
        },
        "/index.ts": {
          code,
        },
      },
      entry: "/index.ts",
      dependencies: {
        "@sinclair/typebox": "latest",
      },
    });
  }
}
