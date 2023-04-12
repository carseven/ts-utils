export type First<T extends unknown[]> = T extends [] ? never : T[0];

// Examples that work but does not take care of edge cases
type First<T> = T[0];
type First<T extends unknown[]> = T[0];
