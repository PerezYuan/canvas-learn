import freeGlobal from './_freeGlobal.js';

/** Detect free variable `self`. */
/** 详见_freeGlobal.js中逻辑与的思考，此时判断是否为浏览器环境. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
/** 先判断服务端环境，再对浏览器环境判断，如都不满足返回Function存在的this */
var root = freeGlobal || freeSelf || Function('return this')();

export default root;
