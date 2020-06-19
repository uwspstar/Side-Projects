/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Constraints: Time Complexity - O(N) Space Complexity - O(1)

*/

const maxSubarraySum = function (arr, num) {
    if (arr.length < num) return null

    let max = 0 
    for (let i = 0; i < num ; i++) {
        max += arr[i]
    } 
    
    let temp = max
    for (let i = num; i < arr.length; i++) {
        temp  += arr[i] - arr[i - num]
        // console.log('i =',i,'max =', max, 'temp = ', temp,'arr[i] = ', arr[i], 'arr[i - num] =', arr[i - num])

        max = Math.max(temp, max)
    }
    return max
}
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5

// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null

/*
function maxSubarraySum (arr, num) {
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}
*/