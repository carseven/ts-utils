// Infer is a complement for extends and should always be use with conditional type.
// It helps infer values from the condition

// https://blog.logrocket.com/understanding-infer-typescript/

// With recursion
export type MyAwaited<T> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? Awaited<U>
    : U
  : never;

// Simple case, no recursion
type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never;
