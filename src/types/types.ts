export type ProductType = Record<string, string>;

export interface FilterI {
    key: string;
    type: string;
    value: Array<string> | RangeFilterI | string;
}

export interface RangeFilterI {
    from: number;
    to: number;
}

export type filterProcessType = Record<string, filterProcessObjI>;

export interface filterProcessObjI {
    type: string;
    value: Array<string>;
}
