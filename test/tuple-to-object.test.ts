import { TupleToObject, Equal, Expect } from "../src";

// Arrange
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type Expected = {
  tesla: "tesla";
  "model 3": "model 3";
  "model X": "model X";
  "model Y": "model Y";
};

// Act
type Result = TupleToObject<typeof tuple>;

// Assert
type TEST = Expect<Equal<Expected, Result>>;
