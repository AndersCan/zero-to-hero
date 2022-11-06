/**
 * Below we have the TypeScript schema `IUser`.
 *
 * Implement UserSchema such that it is Equal to IUser
 */

import * as Utils from "../utils/utils";
import { Type, Static } from "@sinclair/typebox";

interface IUser {
  name: string;
  age: number;
}

export const UserSchema = new Error("Implement this schema");

// --- Do not edit ---
type UserSchemaType = Static<typeof UserSchema>;
type isSolved = Utils.Expect<Utils.Equal<IUser, UserSchemaType>>;
