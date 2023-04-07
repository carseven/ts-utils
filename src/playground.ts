import {
  First,
  Length,
  MyExclude,
  MyPick,
  MyReadonly,
  TupleToObject,
  MyAwaited,
} from "./easy";

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

// @ts-expect-error
todoReadonly.title = "Hello"; // Error: cannot reassign a readonly property
// @ts-expect-error
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

// First of array
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<[]>; // expected to be never

// Length of tuple
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

// Exclude
type ExcludedResult = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

// Awaited
type ExampleType = Promise<string>;

type AwaitedResult = MyAwaited<ExampleType>; // string
