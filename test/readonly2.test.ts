import { Alike, Expect, MyReadonly2 } from '../src';

interface Todo {
    title: string;
    description?: string;
    completed: boolean;
}
type A1 = MyReadonly2<Todo>;
type B1 = Readonly<Todo>;
type C1 = Expect<Alike<A1, B1>>;

type A2 = MyReadonly2<Todo, 'title' | 'description'>;
type B2 = {
    readonly title: string;
    readonly description?: string;
    completed: boolean;
};
type C2 = Expect<Alike<A2, B2>>;

type A3 = MyReadonly2<
    {
        readonly title: string;
        description?: string;
        completed: boolean;
    },
    'title' | 'description'
>;
type B3 = {
    readonly title: string;
    readonly description?: string;
    completed: boolean;
};
type C3 = Expect<Alike<A3, B3>>;

type E1 = MyReadonly2<
    Todo,
    // @ts-expect-error(2344)
    'title' | 'invalid'
>;
