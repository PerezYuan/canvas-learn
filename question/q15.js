// Given a list of integers, find out the max gap where the right side is bigger than the left side.

// 10 12 15 9 7 8 13 10 11

// return: 6, from 13 - 7

// int MaxGap(int array[], int cnt)

var arr = [10,12,15,9,7,8,13,10,11];

function MaxGap1(arr) {
    var ret = [];
    for(var i = 0, ii = arr.length; i < ii; i++) {
        for(var j = i + 1; j < ii; j++) {
            ret.push(arr[j] - arr[i])
        }
    }
    return Math.max(...ret);
}

function MaxGap2(arr) {
    var ret = 0;
    for(var i = 0, ii = arr.length; i < ii; i++) {
        for(var j = i + 1; j < ii; j++) {
            var gap = arr[j] - arr [i];
            if(gap > ret) {
                ret = gap;
            }
        }
    }
    return ret;
}

function MaxGap3(arr) {
    var pivot = arr[0];
    var ret = 0;
    for (var i = 1, ii = arr.length; i < ii; i++) {
        if(arr[i] < pivot) {
            pivot = arr[i];
        } else {
            var gap = arr[i] - pivot;
            ret = gap > ret ? gap : ret;
        }
    }
    return ret;
}

console.log(MaxGap1(arr));
console.log(MaxGap2(arr));
console.log(MaxGap3(arr));