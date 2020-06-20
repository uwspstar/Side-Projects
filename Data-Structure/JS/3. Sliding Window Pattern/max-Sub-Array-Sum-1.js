// slow version
// O(n^2)

const maxSubArraySum = function (arr, num) {

    if (arr.length < num) return null
    let max = -Infinity // min = Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        max = Math.max(temp, max)
    }
    return max
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 1)) // 8
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)) //13
console.log(maxSubArraySum([], 4)) // null