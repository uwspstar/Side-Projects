// Refactored Version

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