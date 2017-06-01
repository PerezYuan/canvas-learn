document.getElementById('clickBtn').onclick = function () {
    var it = longRunningTask("first invoke");
    console.log(it.next());
    console.log(it.next());
}

function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject();
    }
}

function sendXHR(arg) {
    var xhr = createXHR();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {
            return(JSON.parse(xhr.responseText));
        } else {
            console.log(xhr.status);
        }
    }
    var url = "/getjson?a=" + arg;
    xhr.open("get", url, true);
    xhr.send(null);
}

function* longRunningTask(value) {
    var value2 = yield sendXHR(value);
    var value3 = yield sendXHR(value2 + "next");
}