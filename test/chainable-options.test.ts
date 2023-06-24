// import type { Alike, Expect } from '../src';
// import { Chainable } from '../src';

// declare const chainable: Chainable;

// const a1 = chainable
//     .option('foo', 123)
//     .option('bar', { value: 'Hello World' })
//     .option('name', 'type-challenges')
//     .get();
// type B1 = {
//     foo: number;
//     bar: {
//         value: string;
//     };
//     name: string;
// };
// type C1 = Expect<Alike<typeof a1, B1>>;

// const a2 = chainable
//     .option('name', 'another name')
//     // @ts-expect-error(2345)
//     .option('name', 'last name')
//     .get();
// type B2 = {
//     name: string;
// };
// type C2 = Expect<Alike<typeof a2, B2>>;

// const a3 = chainable.option('name', 'another name').option('name', 123).get();
// type B3 = {
//     name: number;
// };
// type C3 = Expect<Alike<typeof a3, B3>>;
