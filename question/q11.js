/**
 * @author perezyuan.
 * @time 2017/03/28.
 * @desc q11.
 * 
 */
/*
    var plug1=(x)=>{return x+1};
    plug1(3);//是多少？
    plug1([3]);//是多少？如何改造？
    plug1([1,2,3]);//[2,3,4]
*/

/* 
    第一问 plug1(3) => 4
    第二问 plug1([3]) => "31"
 */
function typeOf() {
    return arguments.length === 0 ? '[object Null]'
        : Object.prototype.toString.call(arguments[0]);
}
var myPlug1 = (x) => {
    switch (typeOf(x)) {
        case '[object Null]':
            return 0;
        case '[object Undefined]':
            return 0;
        case '[object Number]':
            return x + 1;
        case '[object Array]':
            return x.map((a) => a + 1);
    }
}

myPlug1(3);
myPlug1([1, 2, 3]);

/*
    2. 请实现一个 inherit(subClass, superClass)函数，能够提供原型的继承。
*/

function inherit(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.constructor = subClass;
    subClass.superClass = superClass;
}

function A(name) {
    this.name = name;
}

A.prototype.sayName = function () {
    return this.name;
}

var a = new A('a');


function B(name, nickName) {
    B.superClass.apply(this, Array.prototype.slice.apply(arguments));
    this.nickName = nickName;
}

inherit(B, A);

B.prototype.sayNickName = function () {
    return this.nickName;
}

var b = new B('b', 'bb');
b.sayName();
b.sayNickName();