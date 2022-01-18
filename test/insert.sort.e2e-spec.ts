/*
 * @Description:
 * @Date: 2022-01-18 09:21:55
 */
/*
 * @Description:
 * @Date: 2022-01-17 18:05:45
 */
import { InsertSort, defaultCompare, CompareFn } from '../src';

type box = {
    a: number;
    b: number;
};
describe('测试冒泡排序', () => {
    const array = [5, 4, 3, 2, 0, 9, 6];
    it('测试数组排序', () => {
        const s = new InsertSort<number>(array, defaultCompare);
        s.sort();
        console.log(array);
        expect(array[0]).toBe(0);
    });

    it('测试对象排序,自定义排序算法', () => {
        const box3: box = { a: 3, b: 3 };
        const box1: box = { a: 1, b: 1 };
        const box2: box = { a: 2, b: 2 };
        const d = [box3, box1, box2];
        const fn: CompareFn<box> = (a: box, b: box) => (a.a - b.a > 0 ? 1 : -1);
        const s = new InsertSort<box>(d, fn);
        s.sort();
        console.log(d);
        expect(d[0].a).toBe(1);
    });
});
