/**
 * @author perezyuan.
 * @time 2017/02/14.
 * @desc 构造一个拆分数组的函数.
 * 
 * function chunk(arr, num) { //... }
 * chunk([1,2,3,4], 2) = [[1,2] , [3,4]]
 * 
 */

var chunk = function (arr, num) {
    if (num < 1) {
        return;
    }
    var ret = [];
    arr.forEach(function (item, i) {
        // 每遇到一个整数，向ret中构建一个新的数组
        if (i % num === 0) {
            ret.push([]);
        }
        // 并将该数组中新增的数组添加当前item
        ret[ret.length - 1].push(item);
    });
    console.log(ret);
    return ret;
};
// run

var contry = ['法国', '澳大利亚', '智利', '新西兰', '西班牙', '加拿大', '阿根廷', '美国', '0', '国产', '波多黎各', '英国', '比利时', '德国', '意大利', '意大利'];
var arr = [1, 2, 3, 4];
chunk(contry, 1);
chunk(arr, 2)