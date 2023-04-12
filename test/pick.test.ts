import { MyPick } from "../src";
import { Equal, Expect } from "./utils/utils";

// Arrange
interface Task {
  title: string;
  description: string;
  completed: boolean;
}
type Expected = { title: string; completed: boolean };

// Act
type PickedTask = MyPick<Task, "title" | "completed">;

// Assert
type TEST = Expect<Equal<Expected, PickedTask>>;
