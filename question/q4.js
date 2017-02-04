/**
 * @author perezyuan.
 * @time 2017/01/18.
 * 
 * 传入一个数组，返回拍平后的结果
 * function flatten(arr) {
 *      //return flatten_arr
 *  }
 * flatten([1,[2,3]]) => [1,2,3]
 */

function flatten(arr) {
    var flatten_arr = arr.join(',').split(',');
    var flatten_arr2 = arr.toString().split(',');
    // 问题出现在split之后为['1','2','3']
    return flatten_arr2;
}

console.log(flatten([1,[2,3]]));