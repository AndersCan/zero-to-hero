import { html } from "lit-html";
import { unsafeSVG } from "lit-html/directives/unsafe-svg.js";
import { Title } from "./title";
import { RegularSlide } from "./regular-slide";
import { CodeSlide } from "./code-slide";
import { app } from "../assets/app";
import { appAppApp } from "../assets/app-app-app";
import { valueChain } from "../assets/value-chain";
import { withTypebox } from "../assets/with-typebox";
import { httpRequest } from "../assets/http-request";

import "../component/register";
import { Takeaway } from "./takeaway";
// class="interactable"
// data-type="link"
export function Main() {
  return [
    Title(
      "TypeBox",
      html`<p class="text-base">
          <em class="animated-text font-bold">JSON Schema</em>
          type Builder with
          <em class="animated-text font-bold">Static Type</em> resolution for
          TypeScript
        </p>
        <br class="spacer" />
        <div class="flex justify-between text-sm">
          <span data-trailer-type="text-explainer">
            <small class="text-sm"> Anders Olav Candasamy</small>
            <span data-trailer-text class="text-sm">Fullstack @ nrk.no</span>
          </span>

          <span data-trailer-type="text-explainer">
            <div class="text-base pulser">🔮</div>
            <span data-trailer-text="top" class="text-sm">
              I'm Jim Gimmicky!
            </span>
          </span>

          <span data-trailer-type="text-explainer">
            <div class="text-base pulser">💚</div>
            <span data-trailer-text="top" class="text-sm">
              <ul>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>Testing</li>
                <li>Ytelse</li>
              </ul>
            </span>
          </span>

          <button
            class="text-xs border px-2"
            @click="${() => toggleFullScreen()}"
          >
            fullscreen
          </button>
        </div> `
    ),

    Takeaway(
      html`<h1
        class="text-lg text-[#fedc97] tracking-wider"
        data-trailer-type="text-explainer"
      >
        Why?
        <span data-trailer-text="top" class="text-md"> Cost < Reward </span>
      </h1>`
    ),

    RegularSlide(
      "",
      html`<div class="grid place-content-center">
        <code
          class="text-center text-base text-white tracking-tighter backdrop-blur-sm bg-white/30"
          ><span class="font-semibold" data-trailer-type="text-explainer"
            >Uncaught TypeError:<span data-trailer-text="top" class="text-base"
              >Should we use TypeScript?
            </span></span
          >
          Cannot read properties of
          <span class="font-semibold">undefined</span> (reading 'foo')</code
        >
      </div>`
    ),
    RegularSlide(
      "Build time",
      html`<span data-trailer-type="text-explainer">
        <em class="font-bold animated-text">Static Type</em>
        <span data-trailer-text="top" class="text-md">TypeScript!</span>
      </span>`
    ),
    RegularSlide(
      "App state",
      html`<div
        class="w-[60vw] backdrop-blur-sm bg-white/30 rounded-xl shadow-2xl"
      >
        ${unsafeSVG(app)}
      </div>`
    ),
    RegularSlide(
      "External data",
      html`<div
        class="w-[80vw] backdrop-blur-sm bg-white/30 rounded-xl shadow-2xl"
      >
        ${unsafeSVG(httpRequest)}
      </div>`
    ),
    RegularSlide(
      "Runtime",
      html`
        <span data-trailer-type="text-explainer">
          <em class="font-bold animated-text">JSON Schema</em>
          <span data-trailer-text="top" class="text-lg">Runtime safety 🤩</span>
        </span>
      `
    ),

    RegularSlide(
      "TypeBox 👮‍♀️",
      html`<div
        class="backdrop-blur-sm bg-white/30 w-[40vw] h-[40vw] rounded-xl shadow-2xl"
      >
        ${unsafeSVG(withTypebox)}
      </div>`
    ),

    RegularSlide(
      "TypeBox",
      html`<ul>
        <li>
          <em class="font-bold text-[#fedc97]">Static Type</em
          ><small>(build time)</small>
        </li>
        <li>
          <em class="font-bold text-[#fedc97]">JSON Schema</em
          ><small>(runtime)</small>
        </li>
      </ul>`
    ),

    CodeSlide(`
    import {Type} from "@sinclair/typebox";
    import {log} from "./utils";

    const User = Type.Object({
      //name: Type.String(),
      //age: Type.Number({
      //  title: "Age",
      //  description: "Your age in years"
      //}),
      //isFoo: Type.Optional(Type.Boolean())
    });
    log(User)
    `),
    CodeSlide(`
    import {Type} from "@sinclair/typebox";
    import {log} from "./utils";
    const User = Type.Object({
      name: Type.String({ minLength: 3, maxLength: 40 }),
      age: Type.Number({ minimum: 0, maximum: 120 }),
    });
    log(User)
    `),
    CodeSlide(`
    import { Type } from "@sinclair/typebox";
    import { TypeCompiler } from "@sinclair/typebox/compiler";
    import {log} from "./utils";
    const User = Type.Object({
      name: Type.String({ minLength: 3, maxLength: 40 }),
    });
    const Compiled = TypeCompiler.Compile(User)
    // log(Compiled)
    // log(Compiled.code)
    // log(...Compiled.Errors({}))
    // log(...Compiled.Errors({name: 'f'}))
    // log(...Compiled.Errors({name: 'foo'}))
    `),

    Takeaway(
      html`<h1
        class="text-lg text-[#fedc97] tracking-wider"
        data-trailer-type="text-explainer"
      >
        Overkill?
        <span data-trailer-text="top" class="text-md"
          >Maybe for "simple" code</span
        >
      </h1>`
    ),

    Takeaway(
      html`<h1
        class="text-lg text-[#fedc97] tracking-wider"
        data-trailer-type="text-explainer"
      >
        Ain't nobody got time for that
        <span data-trailer-text="top" class="text-md"
          >...but this will save time</span
        >
      </h1>`
    ),

    Takeaway(
      html`<h1
        class="text-lg text-[#fedc97] tracking-wider"
        data-trailer-type="text-explainer"
      >
        SISO
        <span data-trailer-text="top">💩 in 💩 out</span>
      </h1>`
    ),

    RegularSlide(
      "App App App state",
      html`<div
        class="backdrop-blur-sm bg-white/30 w-[80vw] h-[40vw] rounded-xl shadow-2xl"
      >
        ${unsafeSVG(appAppApp)}
      </div>`
    ),

    RegularSlide(
      "should i implement this?",
      html`<div
        class="backdrop-blur-sm bg-white/30 w-[35vw] rounded-xl shadow-2xl"
      >
        ${unsafeSVG(valueChain)}
      </div>`
    ),
    Takeaway(
      html`<h1
        class="text-lg text-[#fedc97] tracking-wider"
        data-trailer-type="text-explainer"
      >
        KISS
        <span data-trailer-text="top" class="text-md">😘?</span>
      </h1>`
    ),
  ];
}

function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  let elem = document.documentElement;
  elem
    .requestFullscreen({ navigationUI: "hide" })
    .then(() => {
      console.log("went info fullscreen");
    })
    .catch((err) => {
      console.error(
        `An error occurred while trying to switch into fullscreen mode: ${err.message} (${err.name})`
      );
    });
}
