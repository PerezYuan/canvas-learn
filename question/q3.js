/**
 * @author perezyuan.
 * @time 2017/01/18.
 * 
 * 快速构建一个抽奖程序
 */

function draw(sum, number) {
    let sumArr = new Array(sum).fill().map((value, index) => index + 1);
    console.log(sumArr);
    return sumArr;
}

draw(10,2);