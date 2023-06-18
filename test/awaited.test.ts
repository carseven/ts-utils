import { Equal, Expect, MyAwaited } from '../src';

// Arrange
type Expected1 = string;
type Expected2 = number;

// Act
type Result1 = MyAwaited<Promise<string>>;
type Result2 = MyAwaited<Promise<Promise<number>>>;

// Assert
type TEST1 = Expect<Equal<Expected1, Result1>>;
type TEST2 = Expect<Equal<Expected2, Result2>>;
