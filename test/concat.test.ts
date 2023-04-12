import { Concat } from "../src";
import { Equal, Expect } from "./utils/utils";

// Arrange
type Expected1 = ["a", "b"];
type Expected2 = ["a", "b", "c"];

// Act
type Result1 = Concat<["a"], ["b"]>;
type Result2 = Concat<["a"], ["b", "c"]>;

// Assert
type TEST1 = Expect<Equal<Expected1, Result1>>;
type TEST2 = Expect<Equal<Expected2, Result2>>;
