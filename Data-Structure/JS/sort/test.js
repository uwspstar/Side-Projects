const getPivotIndex = function (arr, start, end) {
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    let pivot = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, end, pivotIndex);
    return pivotIndex;

}
const quickSort = function (arr, start = 0, end = arr.length - 1) {
    if (arr.length < 2) return arr;
    if (start < end) {
        let pi = getPivotIndex(arr, start, end);
        quickSort(arr, start, pi - 1);
        quickSort(arr, pi + 1, end);
    }
    return arr;
}
console.table(quickSort([15, 334, 222, 629, 29, 100]));
/*
const merge = function (left, right) {
    if (left.length === 0) return right;
    if (right.length === 0) return left;
    let result = [];
    while (left.length > 0 && right.length > 0) {
        left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift())
    }
    return result.concat(left, right);
}

const mergeSort = function (arr) {
    if (arr.length < 2) return arr;
    let mid = arr.length >> 1;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}


const insertionSort = function (arr) {
    if (arr.length < 2) return arr;
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > current) {
                arr[j + 1] = arr[j];
            } else break;
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.table(insertionSort([15, 334, 222, 629, 29, 100]));

const selectionSort = function (arr) {
    if (arr.length < 2) return arr;
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    for (let i = 0; i < arr.length; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }
        if (smallIndex !== i) swap(arr, i, smallIndex);
    }
    return arr;
}


const bubbleSort = function (arr) {
    if (arr.length < 2) return arr;
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        let isSwap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwap = false
            }
        }
        if (isSwap) break;
    }
    return arr;
}



//step 1 : find max length of num
const getLength = function (num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
const getMaxLength = function (arr) {
    if (arr.length === 1) return arr[0].toString().length;
    let maxLength = 1;
    for (let i = 0; i < arr.length; i++) {
        let len = getLength(arr[i]) //arr[i].toString().length;
        maxLength = Math.max(len, maxLength)
    }
    return maxLength;
}
const getDigit = function (num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
const radixSort = function (arr) {
    if (arr.length < 2) return arr;
    let maxLength = getMaxLength(arr);
    for (let i = 0; i < maxLength; i++) {
        let buckets = Array.from({ length: 10 }, () => [])
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets); // reset arr with 0 position, 10 position, 100 position ...
    }
    return arr;
}

console.log(getMaxLength([15, 334, 222, 629, 29, 100, 5098, 50987]));

console.table(radixSort([15, 1, 334, 222, 221, 629, 29, 100, 5098, 50987])) //[0, 1, 2, 3, 5, 6, 9]
*/