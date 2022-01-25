/*
 * @Description:
 * @Date: 2022-01-25 09:53:11
 */
import { QuickSort } from '../../src';
import { Compare, CompareFn } from '../core';

export class BinarySearch<T> {
    private data: T[] = [];
    private fn: CompareFn<T>;
    constructor(data: T[], fn: CompareFn<T>) {
        this.data = data;
        this.fn = fn;
    }

    search(target: T): number {
        const quickSort = new QuickSort(this.data, this.fn);
        this.data = quickSort.sort();
        let low = 0;
        let high = this.data.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const element = this.data[mid];
            if (this.fn(element, target) === Compare.LESS_THAN) {
                low = mid + 1;
            } else if (this.fn(element, target) === Compare.BIGGER_THAN) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return null;
    }
}
