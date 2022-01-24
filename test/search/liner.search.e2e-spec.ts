/*
 * @Description:
 * @Date: 2022-01-24 18:41:46
 */
import { defaultCompare, LinearSearch } from '../../src';
import { CompareFn } from 'src/core/interface/compare';

/*
 * @Description:
 * @Date: 2022-01-17 16:09:40
 */

type box = {
    a: number;
    b: number;
};
describe('测试线性搜索', () => {
    const array = [5, 4, 3, 2, 0, 9, 6];
    it('测试数字搜索', () => {
        const s = new LinearSearch<number>(array, defaultCompare);
        const index = s.search(5);
        expect(index).toBe(0);
    });

    it('测试对象搜索', () => {
        const box3: box = { a: 3, b: 3 };
        const box1: box = { a: 1, b: 1 };
        const box2: box = { a: 2, b: 2 };
        const d = [box3, box1, box2];
        const fn: CompareFn<box> = (a: box, b: box) => {
            if (a.a - b.a == 0) {
                return 0;
            }
            return -1;
        };
        const s = new LinearSearch<box>(d, fn);
        const index = s.search(box1);
        expect(index).toBe(1);
    });
});
