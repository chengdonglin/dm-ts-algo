/*
 * @Description:
 * @Date: 2022-01-18 09:34:56
 */
import { ISort, CompareFn, Compare } from '../core';

export class MergeSort<T> implements ISort {
    protected array: T[] = [];
    private compareFn: CompareFn<T>;
    constructor(data: T[], compareFn: CompareFn<T>) {
        this.array = data;
        this.compareFn = compareFn;
    }
    sort(): T[] {
        return this.mergeSort(this.array);
    }

    private mergeSort(array: T[] = this.array): T[] {
        if (array.length > 1) {
            const { length } = array;
            // 获取中间值
            const middle = Math.floor(length / 2);
            // 递归填充左右数组
            const left = this.mergeSort(array.slice(0, middle));
            const right = this.mergeSort(array.slice(middle, length));
            // 合并左右数组
            array = this.merge(left, right);
        }
        return array;
    }

    private merge(left: T[], right: T[]): T[] {
        let i = 0;
        let j = 0;
        const result: T[] = [];
        while (i < left.length && j < right.length) {
            result.push(
                this.compareFn(left[i], right[j]) === Compare.LESS_THAN
                    ? left[i++]
                    : right[j++],
            );
        }
        return result.concat(i < left.length ? left.slice(i) : right.slice(j));
    }
}
