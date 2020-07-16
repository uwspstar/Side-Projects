

console.table(selectionSort([15, 334, 222, 629, 29, 100, 5098, 50987]));
/*
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