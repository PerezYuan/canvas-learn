/**
 * @author perezyuan.
 * @time 2017/01/18.
 * 
 * 
 * String存在toUpperCase方法
 * 给数组写一个toUpperCase方法，使得数组中每一个元素toUpperCase
 */

let ArrayPro = Array.prototype;
if (!ArrayPro.toUpperCase) {
    ArrayPro.toUpperCase = function() {
        return this.join(',').toUpperCase().split(',');
    }
}

let result = ['a','b','Cd','123e'].toUpperCase();
console.log(result);