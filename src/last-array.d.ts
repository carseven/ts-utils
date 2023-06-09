export type LastOfArray<TArr extends unknown[]> = TArr extends [...any, infer Last]
    ? Last extends any[]
        ? LastOfArray<Last>
        : Last
    : never;
