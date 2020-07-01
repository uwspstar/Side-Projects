

const quickSort = function (arr, left = 0, right = arr.length - 1) {
    if (left < right)
        let pi = pivot(arr, left, right)
    quickSort(arr, left, pi - 1)
    quickSort(arr, pi + 1, right)
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
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}

/*
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


