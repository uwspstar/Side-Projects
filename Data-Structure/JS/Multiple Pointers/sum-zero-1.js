// find first pair of nums sum as zero for a sorted array
//
const sumZero = function (arr) {
    if (arr.length < 2) return false;

    let start = 0
    let end = arr.length - 1

    while (start < end) {

        if (arr[start] + arr[end] === 0) return [arr[start], arr[end]]

        arr[start] + arr[end] > 0 ? end-- : start++
    }

    return false
}
console.log(sumZero([-5, -4, -3, -2, 1, 0, -1, 3, 4]))
console.log(sumZero([-5, -4, -3, -2, 1, 0, -1, 2, 3]))
console.log(sumZero([-5, -2, -1, 0, 3, 4]))