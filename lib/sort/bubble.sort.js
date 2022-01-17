"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
/*
 * @Description:
 * @Date: 2022-01-17 15:22:09
 */
var compare_const_1 = require("../core/compare.const");
var util_1 = require("../core/util");
var BubbleSort = /** @class */ (function () {
    function BubbleSort(data, compareFn) {
        this.array = [];
        this.array = data;
        this.compareFn = compareFn;
    }
    BubbleSort.prototype.sort = function () {
        var length = this.array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (this.compareFn(this.array[j], this.array[j + 1]) ===
                    compare_const_1.Compare.BIGGER_THAN) {
                    (0, util_1.swap)(this.array, j, j + 1);
                }
            }
        }
    };
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
