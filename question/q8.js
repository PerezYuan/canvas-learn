/**
 * @author perezyuan.
 * @time 2017/03/02.
 * @desc 一道痕屌的面试题.
 * 
 */

// 定义一个Foo 然后提升了一个全局的getName变量 ①
function Foo() {
    getName = function () { alert(1); };
    return this;
}
// 在Foo上挂载了一个静态属性getName() ②
Foo.getName = function () { alert(2); };
// 在Foo的原型对象上挂载一个getName() ③
Foo.prototype.getName = function () { alert(3); };
// 函数表达式 ④
var getName = function () { alert(4); };
// 函数声明，注意函数体会一块被提前 ⑤
function getName() { alert(5); }

// 第一问没啥好说的，直接访问Foo上的静态属性，输出2
Foo.getName(); // 2
// 
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3