export type MyPick<T, K extends keyof T> = { [key in K]: T[K] };

export type MyReadonly<T> = { readonly [key in keyof T]: T[keyof T] };

export type ObjectValues<T> = T[keyof T];
export type TupleToObject<T> = { [key in ObjectValues<T>]: key };
