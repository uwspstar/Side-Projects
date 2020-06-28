/*
https://www.bigocheatsheet.com/
https://visualgo.net/en/sorting?slide=1

 
There is no draft requirement for JS to use a specific sorting algorithm. As many have mentioned here, 
Mozilla uses merge sort. 
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays. The ECMAscript standard does not specify which sort algorithm is to be used
 


merge sort:
It's a combination of two things - merging and sorting

Try out bubble sort on an array of 100000 elements, it will take quite some time!
There is a family of sorting algorithms that can improve time complexity from O(n  ) to O(n log n)

In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays

Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

Merging Arrays Pseudocode
Create an empty array, take a look at the smallest values in each input array
While there are still values we haven't looked at...
    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    - Once we exhaust one array, push in all remaining values from the other array
*/
/*
ideally, when arr only has 1 elem, it is sorted, so continues divide the arr till the arr only has 1 elem.
*/
const merge = function (arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

const mergeSort = function (arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
// console.log(merge([100, 200], [1, 2, 3, 5, 6]))
console.log(mergeSort([100, 200, 1, 2, 3, 5, 6]))