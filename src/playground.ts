import { MyPick, MyReadonly, TupleToObject } from "./easy";

// Pick
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todoPick: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// Readonly
interface TodoReadonly {
  title: string;
  description: string;
}

const todoReadonly: MyReadonly<TodoReadonly> = {
  title: "Hey",
  description: "foobar",
};

todoReadonly.title = "Hello"; // Error: cannot reassign a readonly property
todoReadonly.description = "barFoo"; // Error: cannot reassign a readonly property

// Tuple to object
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type a = keyof typeof tuple;
//   ^?

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const todo: result = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};
