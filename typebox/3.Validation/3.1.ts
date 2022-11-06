import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const C = TypeCompiler.Compile(
  Type.Object({
    x: Type.Number(),
    y: Type.Number(),
    z: Type.Number(),
  })
);

const R = C.Check({ x: 1, y: 2, z: 3 });
