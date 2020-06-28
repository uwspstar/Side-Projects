/*
https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e

Quick Sort
Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

 
There is no draft requirement for JS to use a specific sorting algorithm. As many have mentioned here, 
Mozilla uses merge sort. 
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays. The ECMAscript standard does not specify which sort algorithm is to be used

*/