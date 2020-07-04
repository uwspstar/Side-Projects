// ("lorie loled", "lol")
const searchMathStr = function (long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log('i=',i,'j=',j,'short[j]=', short[j],'long[i + j]=',long[i + j])
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;// find one math increase
        }
    }
    return count;
}
console.log("lorie loled", "lol")
console.log("lorie loled", "ri")
console.log("lorie loled", "l")

/*

function binarySearch(arr, num) {
    let start = 0
    let end = arr.length - 1
    let mid = (start + end) >> 1
    while (start <= end) {
        if (arr[mid] === num) return mid
        arr[mid] > num ? mid = end-- : mid = start++
        mid = (start + end) >> 1
    }
    return arr[mid] === num ? mid : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13))
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103))

*/