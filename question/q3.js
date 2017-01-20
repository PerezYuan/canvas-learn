/**
 * @author perezyuan.
 * @time 2017/01/18.
 * 
 * 快速构建一个抽奖程序
 */

// 问题 splice会进行10次 效率较低
function draw(sum, number = 1) {
    if (sum < number) {
        return;
    }
    let sumArr = new Array(sum).fill().map((value, index) => index + 1);
    let ret = [];
    for(let i = 0; i < number; i++) {
        // random一定的为length，因为sumArr已经被改变
        let num = Math.floor(Math.random() * sumArr.length);
        console.log('draw1: [' + sumArr + ']')
        ret.push(...sumArr.splice(num, 1));
    }
    return ret;
}

console.log('draw1结果：');
console.log(draw(10,8));

console.log('___________________________________');
// 洗牌方案 问题所有都被洗牌了
function draw2(sum, number = 1) {
    if (sum < number) {
        return;
    }
    let sumArr = new Array(sum).fill().map((value, index) => index + 1);
    for(let i = 0; i < number; i++) {
        let num = Math.floor(Math.random() * number);
        [sumArr[num], sumArr[i]] = [sumArr[i], sumArr[num]];
    }
    console.log('draw2: [' + sumArr + ']');
    return sumArr.slice(0, number);
}

console.log('draw2结果：');
console.log(draw2(10,8));