
/*
There is no draft requirement for JS to use a specific sorting algorithm.

Mozilla uses merge sort.
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays. The ECMAscript standard does not specify which sort algorithm is to be used


bubbleSort // outer loop and inner loop, each time find the biggest
selectionSort // find the smallestIndex, swap at the end, two loop
insertionSort // two loop, left side is sorted, insert
mergeSort // find mid, merge two sorted arrays
quickSort // find pivot index, sort left and right

*/