/*
 * @Description:
 * @Date: 2022-01-17 16:03:44
 */

export function swap<T>(items: T[], i: number, j: number) {
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}
