import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { log } from "./utils";
const User = Type.Object({
  name: Type.String({ minLength: 3, maxLength: 40 }),
});
const Compiled = TypeCompiler.Compile(User);

log(Compiled);
log(Compiled.Code());
