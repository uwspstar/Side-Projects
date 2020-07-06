const merge = function (arr1, arr2) {
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1
    let result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}
//console.log(merge([1, 3, 5], [2, 4, 6]))
//console.log(merge([], [2, 4, 6]))
//console.log(merge([1, 3, 5], []))

const mergeSort = function (arr) {
    if (arr.length < 2) return arr
    let mid = arr.length >> 1 // not (0 + arr.length - 1) / 2
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([1, 3, 5, 2, 4, 6]))
/*
const insertionSort = function (arr) {
    if (arr.length < 2) return arr
    //[3, 6, 4] 4 is current
    //left is sorted
    //assume the current is init biggest, compare with all left side, find where need to insert
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        for (; j >= 0; j--) {
            if (arr[j] > current) {
                arr[j + 1] = arr[j]
            } else break;
        }
        arr[j + 1] = current // arr[j] break inner loop
    }
    return arr
}

console.log(insertionSort([5, 3, 2, 6, 0, 4, -1, 9]))


// find the smallest item index, and swap later
const selectionSort = function (arr) {

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    if (arr.length < 2) return arr
    for (let i = 0; i < arr.length - 1; i++) {
        let smallIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j
            }
        }
        if (smallIndex !== i) {
            swap(arr, i, smallIndex)
        }
    }
    return arr
}

console.log(selectionSort([5, 3, 2, 6, 0, 4, -1, 9]))

// O(N^2)
const bubbleSort = function (arr) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    if (arr.length < 2) return arr
    for (let i = arr.length - 1; i >= 0; i++) {
        let isSwap = false
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                isSwap = true
            }
        }
        if (!isSwap) break;
    }
    return arr
}

console.log(bubbleSort([5, 3, 2, 6, 0, 4, -1, 9]))


const bubbleSort = function (arr) {

    if (arr.length < 2) return arr;
    // use two point, from left and right
    for (let i = arr.length - 1; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      console.log(arr, i);
    }
    return arr;
  }

//console.log(bubbleSort([3,2,3,1,2,4,5,5,6]))

var findKthLargest = function(arr, k) {
    //let count = 0
    for (let i = arr.length - 1; i >=arr.length - 1 - k; i--) {
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

console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4))


const getPivotIndex = function (arr, start = 0, end = arr.length - 1) {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    let pivot = arr [start]
    let swapIdx = start
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] > arr[swapIdx]) {

        }
    }
}

const quickSort = function (arr, left = 0, right = arr.length - 1) {
    if (arr.length < 2) return arr
    while (left < right) {
        let pi = getPivotIndex(arr, left, right)
        quickSort(arr, left, pi - 1)
        quickSort(arr, pi + 1, right)
    }
}



// merge two sorted array
const merge = function (arr1, arr2) {
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1
    let i = 0
    let j = 0
    let result = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result;
}

const mergeSort = function (arr) {
    if (arr.length < 2) return arr; // base case : for recursive, it is needed
    let mid = parseInt(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([5, 3, 2, 6, 0, 4, -1, 9]))


// ordered array
// use two pointers
const binarySearch = function (arr, num) {
    if (arr.length < 2) return arr[0] === num
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2)
    while (start <= end) {
        if (arr[mid] === num) return true
        arr[mid] > num ? mid = end-- : mid = start++
        // console.log('mid =', mid,'start =', start,'end =', end)
        mid = Math.floor((start + end) / 2)
    }
    return false
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)) //false
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)) // true
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)) // true
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)) // false




bubbleSort // outer loop and inner loop, each time find the biggest
selectionSort // find the smallestIndex, swap at the end, two loop
insertionSort // two loop, left side is sorted, insert
mergeSort // find mid, merge two sorted arrays
quickSort // find pivot index, sort left and right


//[ 5, 3, 2, 6, 0, 4 ]
const quickSort = function (arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pi = pivot(arr, left, right)
        console.log("pi = ", pi, 'left = ', left, 'right = ', right)
        quickSort(arr, left, pi - 1)
        quickSort(arr, pi + 1, right)
    }
    return arr
}

function pivot(arr, start = 0, end = arr.length - 1) {
    // find the right position for the 1st item
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            console.log('pivot =', pivot, 'arr[i] =', arr[i], 'swapIdx = ', swapIdx, 'arr =', arr)
        }
    }
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    console.log('pivot =', pivot,'swapIdx = ', swapIdx, 'arr =', arr)
    return swapIdx;
}

console.log(quickSort([5, 3, 2, 6, 0, 4]))


const insertionSort = function (arr) {
    if (arr.length < 2) return arr
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        for (; j >= 0; j--) {
            if (arr[j] > current) {
                arr[j + 1] = arr[j]
            } else break;
        }
        arr[j + 1] = current
    }
    return arr
}

console.log(insertionSort([5, 3, 2, 6, 9, 1, 0]))


const selectionSort = function (arr) {
    if (arr.length < 2) return arr
    for (let i = 0; i < arr.length; i++) {
        let smallIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j
            }
        }
        if (smallIndex !== i) {
            [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]]
        }
    }
    return arr
}
console.log(selectionSort([5, 3, 2, 6, 9, 1, 0]))


const bubbleSort = function (arr) {
    if (arr.length < 2) return arr
    for (let i = arr.length - 1; i >=0; i--) {
        let swap = false
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
                swap = true
            }
        }
        if (!swap) break
    }
    return arr
}

console.log(bubbleSort([5, 3, 2, 6, 9, 1, 0]))

const selectionSort = function (arr) {

    if (arr.length < 2) return arr
    // [5, 3, 2, 6, 9, 1, 0]
    for (let i = 0; i < arr.length; i++) {
        let smallIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j
            }
        }
        if (smallIndex !== i) {
            [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]]
        }
    }
    return arr
}
console.log(selectionSort([5, 3, 2, 6, 9, 1, 0]))

const bubbleSort = function (arr) {
    if (arr.length < 2) return arr

    for (let i = arr.length - 1; i >= 0; i--) {
        let swap = false
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
                swap = true
            }
        }
        if (!swap) break
    }
    return arr
}

console.log(bubbleSort([5, 3, 2, 6, 9, 1, 0]))


const selectionSort = function (arr) {
    let len = arr.length
    if (len < 2) return arr
    for (let i = 0; i < len; i++) {
        let smallIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j
            }
        }
        if (smallIndex !== i) {
            [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([5, 3, 2, 6, 9, 1, 0])) //[0, 1, 2, 3, 5, 6, 9]
console.log(selectionSort([5, 4, 3, 2, 1])) //[2,3,5,6,9]
console.log(selectionSort([5, 3, 2, 6, 9])) //[2,3,5,6,9]
*/


