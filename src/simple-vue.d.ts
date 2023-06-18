type FnObj = Record<string, () => any>;

// ... to an object of return types
type MapFnToProp<FunctionObj extends FnObj> = {
    [K in keyof FunctionObj]: ReturnType<FunctionObj[K]>;
};

// Using ThisType to Define this in Objects
export type Options<Data, Computed extends FnObj, Methods> = {
    data(this: {}): Data;
    computed?: Computed & ThisType<Data>;
    methods?: Methods & ThisType<Data & MapFnToProp<Computed> & Methods>;
};

export declare function SimpleVue<Data, Computed extends FnObj, Methods>(
    options: Partial<Options<Data, Computed, Methods>>,
): any;
