import { MyReadonly } from "../src";
import { Equal, Expect } from "./utils/utils";

// Arrange
interface Todo {
  title: string;
  description: string;
}
type Expected = {
  readonly title: string;
  readonly description: string;
};

// Act
type Result = MyReadonly<Todo>;

// Assert
type TEST = Expect<Equal<Expected, Result>>;
