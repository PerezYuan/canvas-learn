function number(opt) {

}

number.prototype = {
    init() {

    },
    moveNext() {

    },
    updateClass() {
    }
}

let clearEmptyElement = (element) => {
    if (typeof element != 'object') {
        console.warn('传入不是节点集合');
        return;
    }
    Array.from(element).forEach((item) => {
        if (item.nodeType == 3 && !/\s/.test(item.nodeValue)) {
            item.parentNode.removeChild(item);
        }
    })
}

let button = document.querySelectorAll('.click');
Array.from(button).forEach((item) => {
    item.addEventListener('click', function (e) {
        let target = e.target,
            parent = target.parentNode;
        clearEmptyElement(parent.childNodes);
        let up = parent.childNodes[0],
            down = parent.childNodes[1],
            classArr = down.className.split("/\s+/");
        //TODO: add class 去重 
        classArr.push("move");
        down.className = classArr.join(" ");
    }, false)
})