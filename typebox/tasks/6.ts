import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

/**
 * Examine the console output
 */

const UserSchema = Type.Object({
  name: Type.String({
    title: "Username",
    description: "bla bla bla your username",
  }),
  age: Type.Number({
    title: "Age",
    description: "bla bla bla your age (in years)",
  }),
});

const compiled = TypeCompiler.Compile(UserSchema);
//@ts-expect-error compiled.code is private
console.log(compiled.code.toString());
// Show Errors
console.log("Error1: ", ...compiled.Errors({}));
console.log("Error2:", ...compiled.Errors({ name: "Navn Navnesen", age: 0 }));
