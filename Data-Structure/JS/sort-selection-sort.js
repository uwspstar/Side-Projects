const selectionSort = function (arr) {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        let smallIdx = i;
        for (let j = smallIdx; j < arr.length; j++) {
            if (arr[smallIdx] > arr[j]) {
                smallIdx = j;
            }
        }
        [arr[i], arr[smallIdx]] = [arr[smallIdx], arr[i]];
    }
    return arr;
}
console.log(selectionSort([5, 4, 3, 2, 1]));