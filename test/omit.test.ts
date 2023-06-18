import { Equal, Expect, MyOmit } from '../src';

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type A1 = MyOmit<Todo, 'description'>;
type B1 = {
    title: string;
    completed: boolean;
};
type C1 = Expect<Equal<A1, B1>>;

type A2 = MyOmit<Todo, 'description' | 'completed'>;
type B2 = {
    title: string;
};
type C2 = Expect<Equal<A2, B2>>;

type E1 = MyOmit<
    Todo,
    // @ts-expect-error(2344)
    'description' | 'invalid'
>;
