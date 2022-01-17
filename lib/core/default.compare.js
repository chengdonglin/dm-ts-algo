"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCompare = void 0;
var compare_const_1 = require("./compare.const");
var defaultCompare = function (a, b) {
    if (a === b) {
        return compare_const_1.Compare.EQUALS;
    }
    else if (a < b) {
        return compare_const_1.Compare.LESS_THAN;
    }
    else {
        return compare_const_1.Compare.BIGGER_THAN;
    }
};
exports.defaultCompare = defaultCompare;
