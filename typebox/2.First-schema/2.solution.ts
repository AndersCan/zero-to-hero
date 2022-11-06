/**
 * Below we have the TypeScript schema `IUser`.
 * 
 * Implement UserSchema such that it is Equal to IUser 
 */

import * as Utils from "../utils/utils"
import { Type, Static } from "@sinclair/typebox"

interface IUser {
  name: string
  age: number
}

export const UserSchema = Type.Object({
  name: Type.String(),
  age: Type.Number()
})

type UserSchemaType = Static<typeof UserSchema>

type solved = Utils.Expect<Utils.Equal<IUser, UserSchemaType>>