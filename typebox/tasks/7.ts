import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

/**
 * Create a "cool" schema and test it here: https://rjsf-team.github.io/react-jsonschema-form/
 *
 * Protip: Can you add title and descriptions to the form?
 */

const myCoolSchema = Type.Object({});

console.log(JSON.stringify(myCoolSchema));

/// SOLUTION

() => {
  const UserSchema = Type.Object(
    {
      name: Type.String({
        title: "Username",
        description: "bla bla bla your username",
      }),
      age: Type.Number({
        title: "Age",
        description: "bla bla bla your age (in years)",
      }),
    },
    { title: "I'm a Human" }
  );
  const RobotSchema = Type.Object(
    {
      id: Type.String({
        title: "Robot Id",
        description: "beep boop",
      }),
      version: Type.Number({
        title: "Software version",
        description: "beep boop",
      }),
    },
    { title: "I'm a robot" }
  );

  console.log(
    JSON.stringify(
      Type.Union([UserSchema, RobotSchema], {
        title: "What are you?",
      })
    )
  );
};
