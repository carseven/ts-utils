// My solution
export type TupleToUnion<T extends unknown[]> = T extends Array<infer U>
    ? U
    : never;

// ============== Alternatives ==============
type TupleToUnion<T extends unknown[]> = T[number];

type TupleToUnion<T> = T extends unknown[] ? T[number] : never;

type TupleToUnion<T> = T[number & keyof T];

// using builtin `Extract`
type Extract<T, U> = T extends U ? T : never;
type TupleToUnion<T> = T[Extract<keyof T, number>];

type TupleToUnion<T> = T extends (infer R)[] ? R : never;

type TupleToUnion<T> = T extends [infer Head, ...infer Tail]
    ? Head | TupleToUnion<Tail>
    : never;

type TupleToUnion<T> = T[any];

type TupleToUnion<T extends any[]> = keyof {
    [K in T[number]]: K;
};
