var arr = [
    {name: '小米1', value: 1, type: 2, date: '2017-06-07T08:00:01.589Z' },
    { name: '锤子T1', value: 1, type: 2, date: '2017-06-07T08:10:01.589Z' },
    { name: '小米2', value: 1, type: 4, date: '2017-06-07T08:00:01.589Z' },
    { name: '小米2', value: 4, type: 4, date: '2017-06-07T08:10:21.189Z' },
    { name: '小米4', value: 1, type: 4, date: '2017-06-07T08:00:01.560Z' },
    { name: '小米4', value: 2, type: 4, date: '2017-06-07T08:10:31.584Z' },
    { name: '小米6', value: 1, type: 3, date: '2017-06-07T08:00:01.589Z' },
    { name: '小米5s', value: 1, type: 4, date: '2017-06-07T08:00:01.589Z' },
    { name: '锤子T2', value: 1, type: 4, date: '2017-06-07T08:00:01.589Z' },
    { name: '锤子T1', value: 4, type: 4, date: '2017-06-07T08:06:01.589Z' },
    { name: '魅蓝note5', value: 1, type: 4, date: '2017-06-07T08:00:01.589Z' },
    { name: '魅蓝note2', value: 5, type: 4, date: '2017-06-02T08:07:01.589Z' },
    { name: '魅蓝note2', value: 6, type: 4, date: '2017-06-07T08:00:01.589Z' },
    { name: '魅蓝note3', value: 1, type: 4, date: '2017-06-05T08:00:01.589Z' },
    { name: '魅蓝note', value: 1, type: 4, date: '2017-06-07T08:00:01.589Z' },
    { name: 'oppor9', value: 7, type: 4, date: '2017-06-04T08:04:01.588Z' },
    { name: '华为p9', value: 1, type: 4, date: '2017-06-02T08:00:01.577Z' },
    { name: '华为p9', value: 2, type: 4, date: '2017-06-07T08:00:01.110Z' },
    { name: '华为p10', value: 1, type: 1, date: '2017-06-07T08:00:01.534Z' }
];


/**
* type为4的数据过滤出来，
* 按相同的 name + date（按天）合并value（value累加），
* 最后按 value 降序(从大到小)排序.
* 然后每行按照 "小米2,4,2017年06月07日" 的格式, 打印出来.
*/
function printArray(arr) {
    function isType4(obj) {
        return obj.type === 4;
    }
    function formatDate(gmt) {
        var date = new Date(gmt);
        return date.getFullYear() + '年' +
            (date.getMonth() + 1) + '月' +
            date.getDate() + '日';
    }
    var resultArr = [];
    if (Array.isArray(arr)) {
        var arr = arr.filter(isType4);
        var resultArr = [];
        var tempMap = {};
        for (var i = 0; i < arr.length; i++) {
            var key = arr[i].name;
            if (!tempMap[key]) {
                tempMap[key] = {
                    name: key,
                    value: arr[i].value,
                    date: arr[i].date
                };
                resultArr.push(tempMap[key])
            } else {
                tempMap[key].value += arr[i].value;
            }
        }
        resultArr
            .sort(function(a, b) {
                return b.value - a.value;
            })
            .map(x => x.name + ',' + x.value + ',' + formatDate(x.date))
            .forEach(x => console.log(x));
    }
}

printArray(arr);
