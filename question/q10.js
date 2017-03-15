/**
 * @author perezyuan.
 * @time 2017/03/15.
 * @desc q10.
 * 
 */

var z = 1;
function foo() {
    console.log(z);
}

(function(fun) {
    var a = 2;
    fun();
})(foo)

var a = 100;
function testResult(){
    var b = 2 * a;
    var a = 200;
    var c = a / 2;
    console.log(b);
    console.log(c);
}
testResult();