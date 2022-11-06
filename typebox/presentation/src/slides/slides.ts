import { html } from "lit-html";
import { unsafeSVG } from "lit-html/directives/unsafe-svg.js";
import { Title } from "./title";
import { RegularSlide } from "./regular-slide";
import { CodeSlide } from "./code-slide";
import { withoutTypebox } from "../assets/without-typebox";
import { withTypebox } from "../assets/with-typebox";

import "../component/register";

export function Main() {
  return [
    Title(),
    RegularSlide(
      "",
      html`<code class="slide-normal text-red-400"
        >Uncaught TypeError: Cannot read properties of undefined (reading
        'foo')</code
      >`
    ),
    RegularSlide("Build time", html`<em>Static Type</em>`),
    RegularSlide("Runtime", html`<em>JSON Schema</em>`),
    RegularSlide("SISO", html``),
    RegularSlide("SISO", html`💩 in 💩 out`),
    RegularSlide(
      "Uten",
      html`<div class="w-[50vw]">${unsafeSVG(withoutTypebox)}</div>`
    ),
    RegularSlide(
      "Med TypeBox",
      html`<div class="w-[40vw]">${unsafeSVG(withTypebox)}</div>`
    ),
    CodeSlide(`
    import {Type} from "@sinclair/typebox";
    import {log} from "./utils";

    const User = Type.Object({
      //name: Type.String(),
      //age: Type.Number(),
      //isFoo: Type.Optional(Type.Boolean())
    });
    log(User)
    `),
    CodeSlide(`
    import {Type} from "@sinclair/typebox";
    import {log} from "./utils";

    const User = Type.Object({
      //name: Type.String({ minLength: 3, maxLength: 40 }),
      //age: Type.Number({ minimum: 0, maximum: 120 }),
    });
    log(User)
    `),
    CodeSlide(`
    import { Type } from "@sinclair/typebox";
    import { TypeCompiler } \n
    from "@sinclair/typebox/compiler";
    import {log} from "./utils";
    const User = Type.Object({
      name: Type.String({ minLength: 3, maxLength: 40 }),
    });
    const Compiled = TypeCompiler.Compile(User)
    log(Compiled.Check)
    `),
  ];
}
