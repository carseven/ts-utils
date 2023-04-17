// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.

// You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

/*
1. You can assign anything to `{}`, *except* for `null` and `undefined`.
2. You can assign anything that's *not a primitive* to `object`.
  - Primitives are strings, booleans, numbers, bigints, symbols, `null` and `undefined`
3. You can only assign *objects* to `Record<string, unknown>`

| Value is assignable to | {}  | object | Record<string, unknown> |
| ---------------------- | --- | ------ | ----------------------- |
| null                   | No  | No     | No                      |
| undefined              | No  | No     | No                      |
| "string"               | Yes | No     | No                      |
| 42                     | Yes | No     | No                      |
| 42n                    | Yes | No     | No                      |
| Symbol()               | Yes | No     | No                      |
| true                   | Yes | No     | No                      |
| () => {}               | Yes | Yes    | No                      |
| [1, 2]                 | Yes | Yes    | No                      |
| []                     | Yes | Yes    | No                      |
| {foo: "bar"}           | Yes | Yes    | Yes                     |
| {}                     | Yes | Yes    | Yes                     |

*/

export type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>;
};

// Other alternatives
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>;
};

type DeepReadonly<T> = T extends object & { call?(): never } // exclude functions from `object` type, equivalent to `T extends Function`
  ? {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
    }
  : T;
