"use strict";
/*
 * @Description:
 * @Date: 2022-01-17 16:03:44
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = void 0;
function swap(items, i, j) {
    var temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}
exports.swap = swap;
