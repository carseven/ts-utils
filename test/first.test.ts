import { Equal, Expect, First } from '../src';

// Arrange
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];
type arr3 = [];

type Expected1 = 'a';
type Expected2 = 3;
type Expected3 = never;

// Act
type Result1 = First<arr1>;
type Result2 = First<arr2>;
type Result3 = First<arr3>;

// Assert
type TEST1 = Expect<Equal<Expected1, Result1>>;
type TEST2 = Expect<Equal<Expected2, Result2>>;
type TEST3 = Expect<Equal<Expected3, Result3>>;
