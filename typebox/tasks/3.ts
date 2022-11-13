import { Type, Static } from "@sinclair/typebox";

/**
 * Make a schema for IUser
 *
 * @tip: Make two schemas, then combine them
 */

type IUser = IHuman | IRobot;

interface IHuman {
  name: string;
  age: number;
}

interface IRobot {
  id: string;
  age: number;
}

/// SOLUTION

() => {
  const human = Type.Object({
    name: Type.String(),
    age: Type.Number(),
  });

  const robot = Type.Object({
    id: Type.String(),
    age: Type.Number(),
  });

  const schema = Type.Union([human, robot]);

  type SchemaUser = Static<typeof schema>;
};
