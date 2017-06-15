document.getElementById('clickBtn').onclick = function () {
    var it = myLogic('called');
    // 本质上是个递归而已，判断generator的done就可以封装， TJ大神的Co
    it.next().value.then(function (result1) {
        it.next(result1).value.then(function(result2) {
            it.next(result2);
        });
    });
}

// Generator函数看起来就像同步函数一样
function* myLogic(value) {
    var serverData = yield myAjax(value);
    console.log(serverData);
    var serverData2 = yield myAjax(serverData.req + " again")
    console.log(serverData2);
}

// 以下公共代码
function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject();
    }
}

function myAjax(value) {
    return new Promise(function (resolve, reject) {
        var xhr = createXHR();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                resolve(JSON.parse(xhr.responseText));
            }
        }
        var url = "/getjson?a=" + value;
        xhr.open("get", url, true);
        xhr.send(null);
    })
}