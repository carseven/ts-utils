// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

import { MyExclude } from "./exclude";

// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

// By default we set all keys of T to readonly.
// If we provide K, we only set those keys to readonly.
export type MyReadonly2<T, K extends keyof T = keyof T> = {
  // Set all keys of T to readonly
  readonly [P in K]: T[P];
} & {
  // Set all other keys to not readonly
  [P in MyExclude<keyof T, K>]: T[P];
};
