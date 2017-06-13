var arr = [
    { name: '小米1', value: 1, type: 2, date: '2017-06-07T08:00:01.589Z' },
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
function formatDate(gmt) {
    var date = new Date(gmt);
    return date.getFullYear() + '年' +
        (date.getMonth() + 1) + '月' +
        date.getDate() + '日';
}

function printArray2(arr) {
    var obj = {
        resultArr: []
    }
    Object.defineProperties(obj, {
        'item': {
            set: function (item) {
                if (item.type !== 4) {
                    return;
                }
                this.__tempMap = this.__tempMap || {};
                var key = item.name,
                    date = formatDate(item.date);
                if (this.__tempMap[key] && this.__tempMap[key].date === date) {
                    this.__tempMap[key].value += item.value;
                } else {
                    this.__tempMap[key] = {
                        name: key,
                        value: item.value,
                        date: date
                    };
                    this.resultArr.push(this.__tempMap[key]);
                }
            },
            get: function () {
                return this.str;
            }
        },
        "str": {
            set: function(newVal) {
                return this.str = newVal;
            },
            get: function() {
                return this.resultArr
                    .sort(function (a, b) {
                        return b.value - a.value;
                    })
            }
        }
    })

    arr.forEach(function (element) {
        obj.item = element;
    }, this);
    obj.item.forEach(element =>
        console.log(element.name + ',' + element.value + ',' + element.date)
    )
}

function printArray1(arr) {
    var resultArr = [];
    if (Array.isArray(arr)) {
        var resultArr = [];
        var tempMap = {};
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].type == 4) {
                var key = arr[i].name,
                    date = formatDate(arr[i].date);
                if (tempMap[key] && tempMap[key].date === date) {
                    tempMap[key].value += arr[i].value;
                } else {
                    tempMap[key] = {
                        name: key,
                        value: arr[i].value,
                        date: date
                    };
                    resultArr.push(tempMap[key]);
                }
            }
        }
        resultArr
            .sort(function (a, b) {
                return b.value - a.value;
            })
            .forEach(element => console.log(element.name + ',' + element.value + ',' + element.date));
    }
}
printArray1(arr);
console.log('________')
printArray2(arr);