/**
 * @author perezyuan.
 * @time 2017/02/28.
 * @desc 隐藏电话号码中间四位.
 * 
 */

let number = '13500430323';
let number2 = '13333333333';

// 方法1，问题在于使用substr可能会带来第一次匹配不是中间4位
function hideFun(num) {
    if(!num) {
        return '';
    }
    return num.replace(num.substr(3, 4), 'xxxx');
}

// 方法2，正则$1和$2来去除两侧表达式
function hideFun2(num) {
    if(!num) {
        return '';
    }
    return num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1xxxx$2');
}

// 方法3，在方法1基础上调用2次substr来拼接
function hideFun3(num) {
    if(!num) {
        return '';
    }
    return num.substr(0, 3) + 'xxxx' + num.substr(7, 4);
}

console.log(hideFun(number));  // 135xxxx0323
console.log(hideFun(number2)); // 1xxxx333333

console.log(hideFun2(number));  // 135xxxx0323
console.log(hideFun2(number2)); // 1xxxx333333

console.log(hideFun3(number));  // 135xxxx0323
console.log(hideFun3(number2)); // 1xxxx333333