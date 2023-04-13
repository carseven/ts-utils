import { If, Equal, Expect } from "../src";

// Arrange
type Expected1 = "a";
type Expected2 = "b";

// Act
type Result1 = If<true, "a", "b">;
type Result2 = If<false, "a", "b">;

// Assert
type TEST1 = Expect<Equal<Expected1, Result1>>;
type TEST2 = Expect<Equal<Expected2, Result2>>;
