import { Compare, CompareFn } from '../core';

/*
 * @Description:
 * @Date: 2022-01-24 18:35:23
 */
export class LinearSearch<T> {
    private data: T[] = [];
    private fn: CompareFn<T>;

    constructor(data: T[], fn: CompareFn<T>) {
        this.data = data;
        this.fn = fn;
    }

    search(data: T): number {
        for (let i = 0; i < this.data.length; i++) {
            if (this.fn(data, this.data[i]) === Compare.EQUALS) {
                return i;
            }
        }
        return null;
    }
}
