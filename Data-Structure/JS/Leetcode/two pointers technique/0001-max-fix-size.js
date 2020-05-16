/*
arr = [1,3,5,8,0,2,4,9,-7]
fix size = 3
max sum is 16 = [3,5,8]
-- https://www.youtube.com/watch?v=MK-NZ4hN7rs
*/

const maxFixSize = function (arr, size) {

    if (arr.length <= size) return arr; // return all arr

    let maxSum = Number.MIN_SAFE_INTEGER;
    let current = 0;


    for (let i = 0; i < arr.length; i++) {
        current += arr[i]; // add new element ( still fix size)
        if (i >= size - 1) {
            maxSum = Math.max(maxSum, current); // compare with current max
            current -= arr[i - (size - 1)] // remove 
        }
    }
    return maxSum;

}
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, -7], 1)) // 9
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, -7], 3)) // 16
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, 7], 3)) // 20
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, -7], 4)) // 17
console.log(maxFixSize([1, 3, 5, 8, 0, 2, 4, 9, 7], 4)) // 22