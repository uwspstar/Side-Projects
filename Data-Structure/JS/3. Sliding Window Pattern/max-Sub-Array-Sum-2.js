//slide window
//O(n)
const maxSubArraySum = function (arr, num) {

    if (arr.length < num) return null
    let max = 0
    let temp = 0

    for (let i = 0; i < num ; i++) {
        max += arr[i]
    }
    for (let i = num; i < arr.length; i++) {
        temp = max + arr[i] - arr[i - num]
        max = Math.max(temp, max)
    }
    return max
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 1)) // 8
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)) //13
console.log(maxSubArraySum([], 4)) // null