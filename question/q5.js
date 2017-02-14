var chunk = function (arr, num) {
    if(num < 1) {
        return;
    }
    var ret = [];
    arr.forEach(function (item, i) {
        if (i % num === 0) {
            ret.push([]);
        }
        ret[ret.length - 1].push(item);
    });
    console.log(ret);
    return ret;
};
// run

var source = ['法国', '澳大利亚', '智利', '新西兰', '西班牙', '加拿大', '阿根廷', '美国', '0', '国产', '波多黎各', '英国', '比利时', '德国', '意大利', '意大利'];
chunk(source, 1);