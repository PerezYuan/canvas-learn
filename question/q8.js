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

// 第一问：没啥好说的，直接访问Foo上的静态属性，输出2
Foo.getName(); // 2
// 第二问：⑤提前了getName的声明，最后都会被④所覆盖，输出4
getName(); // 4
// 第三问：Foo执行后返回本身，然后向当前getName赋值匿名函数，随着作用域向上找，找到④中的getName()并覆盖，输出1
Foo().getName(); // 1
// 第四问：现阶段由于第三步的赋值，还保留了1
getName(); // 1
// 第五问：.运算符等级高于new，所以跟第一问执行一样，出现2
new Foo.getName(); // 2
// 第六问：Foo()中括号优先级最高，先执行后返回实例化对象，而实例化对象中没有getName成员变量，找到原型中输出3
new Foo().getName(); // 3
// 第七问：近乎同6
new new Foo().getName(); // 3

// https://gold.xitu.io/entry/580cdbeec4c9710058943151