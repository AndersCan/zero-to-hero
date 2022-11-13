import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import * as prettier from "prettier";
import parserTypescript from "prettier/parser-typescript";

let myTheme = EditorView.theme(
  {
    "&": {
      color: "black",
      backgroundColor: "white",
    },
    ".cm-content": {
      caretColor: "#0e9",
    },
    ".cm-activeLine": {
      backgroundColor: "#fedc976e",
    },
  },
  { dark: false }
);

export function initEditor(
  el: HTMLElement,
  code: string,
  onChange: (code: string) => void
) {
  let formattedCode = prettier.format(code, {
    parser: "typescript",
    printWidth: 30,

    plugins: [parserTypescript],
  });

  let previous = "";
  let editor = new EditorView({
    doc: formattedCode,
    extensions: [
      myTheme,
      basicSetup,
      javascript({
        typescript: true,
      }),
      EditorView.updateListener.of(function (e) {
        const newCode = e.state.doc.toString();
        if (newCode === previous) {
          return;
        }
        previous = newCode;
        onChange(newCode);
      }),
    ],
    parent: el,
  });

  return editor;
}
