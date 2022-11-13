import { Type, Static } from "@sinclair/typebox";

/**
 * Make a schema for IUser
 *
 * Tip: `|` is called a union in TypeScript
 */

interface IUser {
  name: string;
  age: string | number;
}
