/*

algorithm quicksort(A, lo, hi) is
    if lo < hi then
        p := partition(A, lo, hi)
        quicksort(A, lo, p - 1)
        quicksort(A, p + 1, hi)

algorithm partition(A, lo, hi) is
    pivot := A[hi]
    i := lo
    for j := lo to hi do
        if A[j] < pivot then
            swap A[i] with A[j]
            i := i + 1
    swap A[i] w
    
*/

//https://en.wikipedia.org/wiki/Quicksort

const getPivotIndex = function (arr, low, high) {
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    let pivot = arr[high];
    let pivotIndex = low;
    for (let i = low; i < high; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, high, pivotIndex);
    return pivotIndex;
}
const quickSort = function (arr, low = 0, high = arr.length - 1) {
    if (arr.length < 2) return arr;
    if (low < high) {
        let pi = getPivotIndex(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}
console.log(quickSort([10, 80, 30, 90, 40, 50, 70]));
console.log(quickSort([1, 3, 5, 2, 4, 6, 0, -1]));