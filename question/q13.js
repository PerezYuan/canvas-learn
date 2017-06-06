// 获取一个页面中所有的文案信息并存储到一个对象中

let domEl = [...document.getElementsByTagName('*')];
let hashObj = {};

for (i in domEl) {
    let currEl = domEl[i];
    if (currEl.children.length === 0 && currEl.innerText !== "") {
        if(!hashObj[currEl.tagName]) {
            hashObj[currEl.tagName] = [];
        }

        hashObj[currEl.tagName].push(currEl.innerText);
    }
}

console.log(hashObj);