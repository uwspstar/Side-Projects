/*
HARD to me...

Maximize number of 0s by "flipping a subarray"
Given a binary array, find the maximum number zeros in an array with one flip of a subarray allowed. A flip operation switches all 0s to 1s and 1s to 0s.

Input :  arr[] = {0, 1, 0, 0, 1, 1, 0} Output : 6
We can get 6 zeros by flipping the subarray {1, 1}

Input :  arr[] = {0, 0, 0, 1, 0, 1} Output : 5
*/

const findMaxZeroCount = function (arr) {
    if (arr.length === 0) return 0;
    let fast = 0;
    let temp = [];
    let countZero = 0;
    let maxLenOne = 0;
    while (fast < arr.length) {
        if (arr[fast] === 1) {
            temp.push(arr[fast]);
            maxLenOne = Math.max(maxLenOne, temp.length);
        } else {
            countZero++;
            temp = [];
        }
        fast++;
    }
    return countZero + maxLenOne;
}

console.log(findMaxZeroCount([0, 1, 0, 0, 1, 1, 0]));
console.log(findMaxZeroCount([0, 0, 0, 1, 0, 1]));