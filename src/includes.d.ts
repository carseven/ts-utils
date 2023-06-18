import { Equal } from './utils';

// Simple answer, create object with keys and true values. Then check if key exist
type Includes<T extends unknown[], K> = {
    [P in T[number]]: true;
}[K] extends true
    ? true
    : false;

/**
Returns a boolean for whether given two types are equal.
@link https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
*/
type Includes<Value extends any[], Item> = Equal<Value[0], Item> extends true
    ? true
    : Value extends [Value[0], ...infer rest]
    ? Includes<rest, Item>
    : false;

// This way creates an object with values that are booleans.
// then you turn that object's values into a boolean union
// if the union includes true, then it will not extend false
export type Includes<T extends unknown[], U> = {
    [K in keyof T]: Equal<T[K], U>;
} extends Record<number, false>
    ? false
    : true;
