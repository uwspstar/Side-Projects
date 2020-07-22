
const maxSubArraySum = function (arr, num) {

    if (arr.length < num) return null;

    let max = 0;
    // take the first num of items, then, slide 
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    let temp = max;

    for (let i = num; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - num];  // put one in, and remove one out
        max = Math.max(temp, max);
    }

    return max;
}

// slow version
// O(n^2)

// num means substring length, window size
const maxSubArraySum = function (arr, num) {

    if (arr.length < num) return null;

    let max = -Infinity; // min = Infinity

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        max = Math.max(temp, max);
    }

    return max;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 1)) // 8
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)) //13
console.log(maxSubArraySum([], 4)) // null