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
    let ret = []
    for(let i = 0; i < number; i++) {
        let num = Math.floor(Math.random() * number);
        ret.push(...sumArr.splice(num, 1));
    }
    return ret;
}

console.log(draw(10,8));