/**
 * @author perezyuan.
 * @time 2017/02/28.
 * @desc assign方法实现深复制.
 * 
 */


'use strict';
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function assign(target, source) {
    if (target === null || target === undefined) {
        return;
    }
    var from;
    var to = Object(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }

        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }

    return to;
}

console.log(assign({}, { a: 1 }));