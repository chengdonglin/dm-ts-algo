/*
 * @Description: 选择排序
 * @Date: 2022-01-17 18:00:41
 */
import { ISort, CompareFn, Compare, swap } from '../core';

export class SelectionSort<T> implements ISort {
    protected array: T[] = [];
    private compareFn: CompareFn<T>;
    constructor(data: T[], compareFn: CompareFn<T>) {
        this.array = data;
        this.compareFn = compareFn;
    }
    sort() {
        const length = this.array.length;
        let indexMin = 0;
        for (let i = 0; i < length; i++) {
            indexMin = i;
            for (let j = i; j < length; j++) {
                if (
                    this.compareFn(this.array[indexMin], this.array[j]) ===
                    Compare.BIGGER_THAN
                ) {
                    indexMin = j;
                }
            }
            if (i != indexMin) {
                swap(this.array, i, indexMin);
            }
        }
    }
}
