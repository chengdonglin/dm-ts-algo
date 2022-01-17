/*
 * @Description: 冒泡排序
 * @Date: 2022-01-17 15:22:09
 */
import { Compare } from '../core/compare.const';
import { CompareFn } from '../core/interface/compare';
import { ISort } from '../core/interface/sort';
import { swap } from '../core/util';

export class BubbleSort<T> implements ISort {
    protected array: T[] = [];
    private compareFn: CompareFn<T>;
    constructor(data: T[], compareFn: CompareFn<T>) {
        this.array = data;
        this.compareFn = compareFn;
    }
    sort() {
        const length = this.array.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (
                    this.compareFn(this.array[j], this.array[j + 1]) ===
                    Compare.BIGGER_THAN
                ) {
                    swap(this.array, j, j + 1);
                }
            }
        }
    }
}
