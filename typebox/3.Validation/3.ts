/**
 * Let us use the schema we created in step to to validate some data with Ajv
 *
 *
 */

import { UserSchema } from "../2.First-schema/2";
import { Type, Static } from "@sinclair/typebox";
import Ajv from "ajv";

const ajv = new Ajv();
const validate = ajv.compile(UserSchema);

const failingCases = [{}, { name: "", age: "" }, { name: "" }, { age: 0 }];

const passesFailing = failingCases
  .map((test) => {
    return validate(test) === false;
  })
  .every((testResult) => testResult === true);

const successCases = [{ name: "John", age: 5 }];

const passesGoodCases = failingCases
  .map((test) => {
    return validate(test) === true;
  })
  .every((testResult) => testResult === true);
