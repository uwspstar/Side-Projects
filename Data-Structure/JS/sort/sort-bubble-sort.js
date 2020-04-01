const arr = [0, 1, 5, 4, 3, 2, 6];

const bubbleSort = function (arr) {

    if (arr.length < 2) return arr;

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

console.log(bubbleSort(arr));