import { Equal, Expect, MyParameters } from '../src';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const foo = (arg1: string, arg2: number): void => {};

type A1 = MyParameters<typeof foo>;
type B1 = [string, number];
type C1 = Expect<Equal<A1, B1>>;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
type A2 = MyParameters<typeof bar>;
type B2 = [boolean, { a: 'A' }];
type C2 = Expect<Equal<A2, B2>>;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const baz = (): void => {};
type A3 = MyParameters<typeof baz>;
type B3 = [];
type C3 = Expect<Equal<A3, B3>>;
