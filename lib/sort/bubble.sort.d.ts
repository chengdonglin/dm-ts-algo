import { CompareFn } from '../core/interface/compare';
import { ISort } from '../core/interface/sort';
export declare class BubbleSort<T> implements ISort {
    protected array: T[];
    private compareFn;
    constructor(data: T[], compareFn: CompareFn<T>);
    sort(): void;
}
