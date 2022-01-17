import { Compare } from './compare.const';
import { CompareFn } from './interface/compare';

export const defaultCompare: CompareFn<number> = (a: number, b: number) => {
    if (a === b) {
        return Compare.EQUALS;
    } else if (a < b) {
        return Compare.LESS_THAN;
    } else {
        return Compare.BIGGER_THAN;
    }
};
