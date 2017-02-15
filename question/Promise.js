/**
 * @author perezyuan.
 * @time 2017/02/15.
 * 
 * 实现一个Promise
 */

function fn1(resolve, reject) {
    setTimeout(function () {
        console.log("fn1被执行");
        resolve("number1");
    }, 1000)
}

function fn2(resolve, reject) {
    setTimeout(function () {
        console.log("fn2被执行")
        resolve("number2");
    }, 1000)
}

function myPromise(fun) {
    var me = this;
    me.callbackArr = [];

    me.then = function (onFulfilled) {
        me.callbackArr.push(onFulfilled);
        return me;
    };

    function resolve(value) {
        me.callbackArr.forEach(function(callback) {
            callback(value);
        })
    }
    // console.log(me.handler);
    fun(resolve);
}

new myPromise(fn1).then(function (value) {
    console.log(value);
}).then(function(value) {
    console.log("2" + value)
});