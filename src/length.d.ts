// Because we are using the object of array, this object has a lot of properties and we can infer the length value type

// Simple version
type LengthSimple<T extends unknown[]> = T["length"];

export type Length<T extends unknown[]> = T extends { length: infer R }
  ? R
  : never;
