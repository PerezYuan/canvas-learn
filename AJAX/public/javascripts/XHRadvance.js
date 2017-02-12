document.getElementById('getBtn').onclick = function () {
    var xhr = createXHR();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                alert(xhr.responseText);
            } else {
                alert(xhr.status);
            }
            console.log(JSON.parse(xhr.responseText));
        }
    }

    xhr.open("get", addParam("/getjson?a=1", "b", 2), true);
    xhr.send("b=2");
    // get这样传输数据没用 没有设置http头
}

document.getElementById('postBtn').onclick = function () {
    var xhr = createXHR();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                alert(xhr.responseText);
            } else {
                alert(xhr.status);
            }
            console.log(JSON.parse(xhr.responseText));
        }
    }
    // 设置http头
    xhr.open("post", addParam("getjson?a=1", "b", "2"), true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("fname=Bill&lname=Gates");
}

function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject();
    }
}

function addParam(url, name, value) {
    url += ~url.indexOf('?') ? "&" : "?";
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}