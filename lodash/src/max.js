import baseExtremum from './_baseExtremum.js';
import baseGt from './_baseGt.js';
import identity from './identity.js';

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  /** 
   * array && array.length能判断 [1,2,3,4]：数组类型 '1234':字符串类型
   * 传入迭代器对象 identity 恒等值，return argument的第一个值
   * baseGt 基本比较函数，(value, other) => value > other
   */
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

export default max;
