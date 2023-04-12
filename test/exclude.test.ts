import { MyExclude } from "../src";
import { Equal, Expect } from "./utils/utils";

// Arrange
type Expected = "b" | "c";

// Act
type Result = MyExclude<"a" | "b" | "c", "a">;

// Assert
type TEST = Expect<Equal<Expected, Result>>;
