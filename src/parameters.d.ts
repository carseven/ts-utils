export type MyParameters<T extends (...args: any[]) => any> = T extends (
    ...args: infer U
) => unknown
    ? U
    : never;
