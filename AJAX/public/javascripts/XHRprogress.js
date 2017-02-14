document.getElementById('getBtn').onclick = function () {
    var xhr = createXHR();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                console.log(JSON.parse(xhr.responseText));
            } else {
                alert(xhr.status);
            }
        }
    }

    xhr.addEventListener("progress", updateProgress, false);
    function updateProgress(evt) {
        console.log(evt);
        if (evt.lengthComputable) {
            var percentComplete = Math.floor(100 * evt.loaded / evt.total);
            console.log(percentComplete);
            var progress = document.getElementById("progress");
            progress.innerHTML = percentComplete + "%";
        } else {
            // ...
        }
    }

    xhr.open("get", addParam("/getjson?a=1", "b", 2), true);
    xhr.send();
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