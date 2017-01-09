/** Detect free variable `global` from Node.js. */
/** 
 * 逻辑与操作的一些思考
 * 1.在第一个操作符等于true的时候会返回第二个操作符
 * 2.第一个操作符为对象时候会返回第二个操作符
 * 
 * 这里如果是nodejs或者io.js环境，typeof global == 'object'为true，从左
 * 至右返回第二个global也就是对象，再与一个global.Object === Object进行
 * 逻辑与运算根据规则2会直接返回true，再与一个global判断就会返回global了
 * 
 * 写两层的原因就是为了证明global一定为一个全局且包含内部原生Object的对象
 * 保证此时的环境全局是global对象
 */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

export default freeGlobal;
