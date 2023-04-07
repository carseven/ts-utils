export type MyPick<T, K extends keyof T> = { [key in K]: T[K] };

export type MyReadonly<T> = { readonly [key in keyof T]: T[keyof T] };

export type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P;
};

// Examples that work but does not take care of edge cases
// export type First<T> = T[0];
// export type First<T extends unknown[]> = T[0];
export type First<T extends unknown[]> = T extends [] ? never : T[0];

// Because we are using the object of array
// This object has a lot of properties and we can infer the length value type
// type LengthSimple<T extends unknown[]> = T["length"];
export type Length<T extends unknown[]> = T extends { length: infer R }
  ? R
  : never;

// Distribute conditional types
// export type MyExcludeLessSafe<T, K> = T extends K ? never : T;
export type MyExclude<T, K extends T> = T extends K ? never : T;

// Infer is a complement for extends and should always be use with conditional type.
// It helps infer values from the condition

// https://blog.logrocket.com/understanding-infer-typescript/

// My solution, simple bc one level

/*
export type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : never;
*/
// With recursion
export type MyAwaited<T> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? Awaited<U>
    : U
  : never;
