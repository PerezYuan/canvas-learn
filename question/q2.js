/**
 * @author perezyuan.
 * @time 2017/01/18.
 * 
 * 请用JavaScript 实现一个方法，该方法能够判断两个字符串是否匹配, 如:
 * function isMatch(str1, str2) {
 *     // ...
 * }
 * isMatch('something', 'gnihtemos')  // true
 * isMatch('aaa', 'aa')  //false
 * isMatch('abb', 'baa')  //false
 * isMatch('hello', 'olelh')  //true
 */

function isMatch() {
    let arg1 = arguments[0];
    let arg2 = arguments[1];
    // 如果只是反向
    // return arg2.split('').reverse().join('') === arg1;
    // 如果乱序
    return arg2.split('').sort().join('') === arg1.split('').sort().join('');
}

var result = isMatch('something', 'gnihtemos'); //true
var result2 = isMatch('hello', 'olelh'); //true
console.log(result);
console.log(result2);