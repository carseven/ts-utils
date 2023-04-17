import { MyExclude } from "./exclude";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export type MyOmit<T, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
