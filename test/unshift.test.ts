import { Equal, Expect, Unshift } from "../src";

type A1 = Unshift<[], 1>;
type B1 = [1];
type C1 = Expect<Equal<A1, B1>>;

type A2 = Unshift<[1, 2], 0>;
type B2 = [0, 1, 2];
type C2 = Expect<Equal<A2, B2>>;

type A3 = Unshift<["1", 2, "3"], boolean>;
type B3 = [boolean, "1", 2, "3"];
type C3 = Expect<Equal<A3, B3>>;
