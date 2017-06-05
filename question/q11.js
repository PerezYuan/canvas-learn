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
    // subClass.constructor = subClass;
    // subClass.prototype = new superClass();
    subClass.superClass = superClass;
}

function Animals(name) {
    this.category = "Animals";
    this.name = name;
}

Animals.prototype.sayCategory = function () {
    console.log(this.category);
}

Animals.prototype.sayName = function () {
    console.log(this.name);
}

function Dog(name, nickName) {
    Dog.superClass.apply(this, Array.prototype.slice.apply(arguments));
    this.nickName = nickName;
}

Dog.prototype.sayNickName = function () {
    console.log(this.nickName);
}

inherit(Dog, Animals);

var dog = new Dog('dog', 'wangcai');
dog.sayName();
dog.sayCategory();
// dog.sayNickName();  inherit方法冲掉了