/*
*/

const smallestSubarrayWithGivenSum = function (arr, sum) {
    let smallest_array_size = 1;

    let smallest = Number.MAX_SAFE_INTEGER;
    let current = 0;

    for (let i = 0; i < arr.length; i++) {
        current += arr[i];
        if (current)
    }
}

console.log(smallestSubarrayWithGivenSum([1, 3, 5, 8, 0, 2, 4, 9, -7], 1))
// 9
console.log(smallestSubarrayWithGivenSum([1, 3, 5, 8, 0, 2, 4, 9, -7], 3))
// 16
console.log(smallestSubarrayWithGivenSum([1, 3, 5, 8, 0, 2, 4, 9, 7], 3))
// 20
console.log(smallestSubarrayWithGivenSum([1, 3, 5, 8, 0, 2, 4, 9, -7], 4))
// 17
console.log(smallestSubarrayWithGivenSum([1, 3, 5, 8, 0, 2, 4, 9, 7], 4))
// 22