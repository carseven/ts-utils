import { MyExclude, Equal, Expect } from "../src";

// Arrange
type Expected = "b" | "c";

// Act
type Result = MyExclude<"a" | "b" | "c", "a">;

// Assert
type TEST = Expect<Equal<Expected, Result>>;
