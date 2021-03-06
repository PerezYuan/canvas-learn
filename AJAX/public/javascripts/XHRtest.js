document.getElementById('clickBtn').onclick = function () {
    var xhr = createXHR();
    xhr.onreadystatechange = function () {
        switch (xhr.readyState) {
            case 0:
                console.log(0, '未初始化，没有调用open');
                break;
            case 1:
                console.log(1, '准备好发送，调用了open但没调用send');
                break;
            case 2:
                console.log(2, '发送中，调用send但是没有接受响应');
                break;
            case 3:
                console.log(3, '接受中，返回部分数据');
                break;
            case 4:
                console.log(4, '全部返回完毕');
                if (xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {
                    alert(xhr.responseText);
                } else {
                    alert(xhr.status);
                }
                console.log(JSON.parse(xhr.responseText));
                break;
        }
    }

    xhr.open("get", "/getjson", true);
    xhr.send(null);
}

function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject();
    }
}