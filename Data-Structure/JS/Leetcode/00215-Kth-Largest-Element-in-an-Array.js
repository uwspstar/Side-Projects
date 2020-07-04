/*
215. Kth Largest Element in an Array
Medium 
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Input: [3,2,1,5,6,4] and k = 2 Output: 5
Input: [3,2,3,1,2,4,5,5,6] and k = 4 Output: 4

You may assume k is always valid, 1 ≤ k ≤ array's length.


Q : 
1) sorted arr
2) duplicate

*/

// quick sort fast
const findKthLargest = (nums, k) => {
    let start = 0
    let end = nums.length - 1
    let len = nums.length

    while (start <= end) {
        let idx = (start + end) >> 1
        // (A >> B) => Math.floor(A / (2 ** B)) => Math.floor(A / Math.pow(2, B))
        let final = partition(nums, start, end, idx)

        if (final === len - k) {
            return nums[final]
        } else if (final < len - k) {
            start = final + 1
        } else {
            end = final - 1
        }
    }

    return -1
}

const partition = (nums, start, end, idx) => {
    let partition_value = nums[idx]

    swap(nums, idx, end)

    let left = start

    for (var i = start; i < end; i++) {
        if (nums[i] < partition_value) {
            swap(nums, i, left)
            left++
        }
    }

    swap(nums, end, left)

    return left

}

const swap = (nums, x, y) => {
    const tmp = nums[x]
    nums[x] = nums[y]
    nums[y] = tmp
}

//bubble sort slow
var findKthLargest = function (arr, k) {
    //let count = 0
    for (let i = arr.length - 1; i >= arr.length - 1 - k; i--) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        //count++
        //if (k === count) break

    }
    //console.log('k =',k,'count =',count,'arr =',arr, arr[arr.length - k])
    return arr.slice(-k)[0]
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)) 