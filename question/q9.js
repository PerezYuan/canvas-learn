/**
 * @author perezyuan.
 * @time 2017/03/06.
 * @desc 编写一个javscript函数 fn，该函数有一个参数 n（数字类型），其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32].
 * 
 */

function fn(n) {
    // 提取min和max
    var min = 2,
        max = 32;
    // 对入参进行校验
    if(Object.prototype.toString.call(n) !== '[object Number]') {
        return [];
    }
    if(n < 1 || n > max - min + 1) {
        return [];
    }
    // 核心循环
    var arr = [];
    for(var i = 0; i < n; i++) {
        var value = getRandom(min, max);
        if(!~arr.indexOf(value)) {
            arr.push(value);
        } else {
            i--;
        }
    }
    return arr;
}

// 获取随机数函数
function getRandom(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

console.log(fn(31));