import type { Equal, Expect, LastOfArray } from '../src';

type A1 = LastOfArray<[3, 2, 1]>;
type B1 = 1;
type C1 = Expect<Equal<A1, B1>>;

type A2 = LastOfArray<[() => 123, { a: string }]>;
type B2 = { a: string };
type C2 = Expect<Equal<A2, B2>>;

type A3 = LastOfArray<[]>;
type B3 = never;
type C3 = Expect<Equal<A3, B3>>;

type A4 = LastOfArray<[[1], 1, [[5, 2]]]>;
type B4 = 2;
type C4 = Expect<Equal<A4, B4>>;
