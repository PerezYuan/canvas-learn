/**
 * @author perezyuan.
 * @time 2017/06/05.
 * @desc q12.
 * 
 */

// 立即执行函数返回入参1，闭包返回(1 + b);
// 入参为4, 4 + 1 = 5
var test = (function (a) {
    this.a = a;
    return function (b) {
        return this.a + b;
    }
}(function (a, b) {
    return a;
}(1, 2))
);

console.log(test(4))