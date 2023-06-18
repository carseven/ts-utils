import { Equal, Expect, TupleToUnion } from '../src';

type A1 = TupleToUnion<[123, '456', true]>;
type B1 = 123 | '456' | true;
type C1 = Expect<Equal<A1, B1>>;

type A2 = TupleToUnion<[123]>;
type B2 = 123;
type C2 = Expect<Equal<A2, B2>>;
