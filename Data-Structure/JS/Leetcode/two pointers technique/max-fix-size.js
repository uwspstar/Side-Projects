/*
arr = [1,3,5,8,0,2,4,9,-7]
fix size = 3
max is 16 = [3,5,8]
*/

const maxFixSize = function (arr, size) {

    if (arr.length <= size) return arr; // return all arr

    let maxSum = Number.MIN_SAFE_INTEGER;
    let current = 0;

    for (let i = 0; i < arr.length; i++) {
        current += arr[i];
        if (i >= size - 1) {
            maxSum = Math.max(maxSum, current);
            current -= arr[i - (size - 1)]
        }
    }
    return maxSum;

}
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, -7], 1)) // 16
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, -7], 3)) // 16
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, 7], 3)) // 20
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, -7], 4)) // 17
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, 7], 4)) // 22