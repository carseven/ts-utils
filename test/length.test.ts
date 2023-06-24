import { Equal, Expect, Length } from '../src';

// Arrange
type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

type Expected1 = 4;
type Expected2 = 5;

// Act
type Result1 = Length<tesla>;
type Result2 = Length<spaceX>;

// Assert
type TEST1 = Expect<Equal<Expected1, Result1>>;
type TEST2 = Expect<Equal<Expected2, Result2>>;
