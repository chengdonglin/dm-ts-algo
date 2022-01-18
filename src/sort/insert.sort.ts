/*
 * @Description:
 * @Date: 2022-01-18 09:17:56
 */

import { Compare } from '../core/compare.const';
import { CompareFn } from '../core/interface/compare';
import { ISort } from '../core/interface/sort';

export class InsertSort<T> implements ISort {
    protected array: T[] = [];
    private compareFn: CompareFn<T>;
    constructor(data: T[], compareFn: CompareFn<T>) {
        this.array = data;
        this.compareFn = compareFn;
    }
    sort() {
        const length = this.array.length;
        let temp;
        for (let i = 1; i < length; i++) {
            let j = i;
            temp = this.array[i];
            while (
                j > 0 &&
                this.compareFn(this.array[j - 1], temp) === Compare.BIGGER_THAN
            ) {
                this.array[j] = this.array[j - 1];
                j--;
            }
            this.array[j] = temp;
        }
    }
}
