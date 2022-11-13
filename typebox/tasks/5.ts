import { Type, Static } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

/**
 * Create a validation function for UserSchema
 */

const human = Type.Object({
  name: Type.String(),
  age: Type.Number(),
});

const robot = Type.Object({
  id: Type.String(),
  age: Type.Number(),
});

const UserSchema = Type.Union([human, robot]);

/// SOLUTION

(function () {
  const compiled = TypeCompiler.Compile(UserSchema);

  console.log(
    "false: ",
    compiled.Check(undefined),
    compiled.Check({}),
    compiled.Check({ name: "" }),
    compiled.Check({ age: "" }),
    compiled.Check({ name: 2 }),
    compiled.Check({ name: "ok", age: 1 })
  );
  console.log(
    "true: ",
    compiled.Check({ name: "ok", age: 2 }),
    compiled.Check({ id: "robot ok", age: 2 })
  );
})();
