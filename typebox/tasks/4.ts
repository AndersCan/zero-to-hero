import { Type, Static } from "@sinclair/typebox";

/**
 * Make a schema for IUsers
 *
 */
type IUser = IHuman | IRobot;
type IUsers = IUser[];

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
  const arrschema = Type.Array(schema);
  type SchemaUsers = Static<typeof arrschema>;
};
