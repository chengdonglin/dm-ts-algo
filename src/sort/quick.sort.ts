/*
 * @Description:
 * @Date: 2022-01-21 17:50:43
 */
import { ISort, CompareFn, Compare, swap } from '../core';

export class QuickSort<T> implements ISort {
    protected array: T[] = [];
    private compareFn: CompareFn<T>;
    constructor(data: T[], compareFn: CompareFn<T>) {
        this.array = data;
        this.compareFn = compareFn;
    }
    sort(): T[] {
        return this.quickSort(this.array, this.array.length);
    }

    private quickSort(a: Array<T>, n: number): Array<T> {
        let start: number = 0; // 开始索引
        let end: number = n - 1; // 结束索引
        if (start >= n) return a;
        // 计算中间索引
        let q: number = Math.floor((start + end) / 2);
        let left: Array<T> = []; // 记录小于中间索引值的左边数组
        let right: Array<T> = []; // 记录大于中间索引值的右边数组
        let l: number = 0,
            r: number = 0;
        for (let i: number = 0; i < a.length; i++) {
            if (i == q) continue;
            if (this.compareFn(a[i], a[q]) === Compare.LESS_THAN) {
                left[l++] = a[i];
            } else {
                right[r++] = a[i];
            }
        }
        // 分治递归
        return this.quickSort(left, left.length).concat(
            [a[q]],
            this.quickSort(right, right.length),
        );
    }
}
