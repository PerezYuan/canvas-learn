// 模仿node.js core

var module = {
  exports: {

  }
};

exports = module.exports;

// 测试案例

exports.name = 'perezyuan';
exports.sayHi = function () {
  console.log('hi')
};

// 注意此时module上的exports是什么
console.log(module) // { exports: { name: 'perezyuan', sayHi: [Function] } }

exports = {
  name: 'change',
  add: function (a, b) {
    return a + b;
  }
}

// exports 是一个引用，直接赋值给它，只是让这个变量等于另外一个引用
console.log(exports) // { name: 'change', add: [Function] }
// 并不会修改到导出的对象
console.log(module) // { exports: { name: 'perezyuan', sayHi: [Function] } }

module.exports = {
  name: 'change',
  add: function (a, b) {
    return a + b;
  }
}

// 只有通过 module.exports 才能真正修改到 exports 本身
console.log(module) // { exports: { name: 'change', add: [Function] } }