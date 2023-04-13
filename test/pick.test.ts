import { MyPick, Equal, Expect } from "../src";

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
