//O(N^2)
//left point, right point, each time find the biggest and put right side

const bubbleSort = function (arr) {
    // left point, right point, each time find the biggest and put right side
    if (arr.length < 2) return arr
    for (let i = arr.length - 1; i >= 0; i--) {
        let swap = false
        for (let j = 0; j < i; j++) {
            // if arr[j] < arr[j + 1] return arr will be descending
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swap = true
            }
        }
        if (!swap) break  // right side has been sorted
    }
    return arr

}
console.log(bubbleSort([5, 3, 2, 6, 9, 1, 0]))