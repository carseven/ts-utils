// Distribute conditional types
// https:www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

// When conditional types act on a generic type, they become distributive when given a union type. The conditional type will be applied to each member of that union.

// We iterate the condition throw each member of the union type

export type MyExclude<T, K extends T> = T extends K ? never : T;

// Simple case
type MyExcludeLessSafe<T, K> = T extends K ? never : T;
