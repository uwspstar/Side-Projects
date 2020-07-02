/*
https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e

Quick Sort
Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

 
There is no draft requirement for JS to use a specific sorting algorithm. As many have mentioned here, 
Mozilla uses merge sort. 
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays. The ECMAscript standard does not specify which sort algorithm is to be used

https://www.geeksforgeeks.org/quick-sort/

Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

Always pick first element as pivot.
Always pick last element as pivot (implemented below)
Pick a random element as pivot.
Pick median as pivot.

*/

const quickSort = function (arr, left, right) {
    
    if (left < right) {
        let pi = getPivotIndex(arr, left, right)
        quickSort(arr, left, pi - 1)
        quickSort(arr, pi + 1, right)
    } 
    return arr
}

// find the pivot index
function getPivotIndex(arr, start = 0, end = arr.length - 1) {
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