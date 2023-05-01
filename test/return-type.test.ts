import { Equal, Expect, MyReturnType } from "../src";

type A1 = MyReturnType<() => string>;
type B1 = string;
type C1 = Expect<Equal<A1, B1>>;

type A2 = MyReturnType<() => 123>;
type B2 = 123;
type C2 = Expect<Equal<A2, B2>>;

type ComplexObject = {
  a: [12, "foo"];
  bar: "hello";
  prev(): number;
};
type A3 = MyReturnType<() => ComplexObject>;
type B3 = ComplexObject;
type C3 = Expect<Equal<A3, B3>>;

type A4 = MyReturnType<() => Promise<boolean>>;
type B4 = Promise<boolean>;
type C4 = Expect<Equal<A4, B4>>;

type A5 = MyReturnType<() => () => "foo">;
type B5 = () => "foo";
type C5 = Expect<Equal<A5, B5>>;

const fn = (v: boolean) => (v ? 1 : 2);
type A6 = MyReturnType<typeof fn>;
type B6 = 1 | 2;
type C6 = Expect<Equal<A6, B6>>;

const fn1 = (v: boolean, w: any) => (v ? 1 : 2);
type A7 = MyReturnType<typeof fn1>;
type B7 = 1 | 2;
type C7 = Expect<Equal<A7, B7>>;
