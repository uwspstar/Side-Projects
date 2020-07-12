/*
https://www.bigocheatsheet.com/
https://visualgo.net/en/sorting?slide=1
https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e
 
Divide and Conquer! This is the principle behind the working of the merge sort algorithm. 

While the bubble and insertion sort algorithms use iteration, merge sort uses recursion. 

Mozilla uses merge sort. 
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays. The ECMAscript standard does not specify which sort algorithm is to be used
 
merge sort: It's a combination of two things - "merging" and "sorting"

Try out bubble sort on an array of 100000 elements, it will take quite some time!
There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)

In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays

Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

Merging Arrays Pseudocode
- need extra space let result = [] to hold the merge result;
Create an empty array ( let result = [] ), take a look at the smallest values in each input array
While there are still values we haven't looked at...
    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    - Once we exhaust one array, push in all remaining values from the other array
 
ideally, when arr only has 1 elem, it is sorted, so continues divide the arr till the arr only has 1 elem.
*/

// pop()   - push()
// shift() - unshift()
// The shift() method removes the first element from an array and "returns that removed element". This method changes the length of the array. same as pop() : 
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const merge = function (left, right) {
    if (left.length === 0) return right;
    if (right.length === 0) return left;
    let result = [];
    while (left.length > 0 && right.length > 0) {
        left[0] < right[0] ? result.push(left.shift())
            : result.push(right.shift());
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
console.log(mergeSort([1, 6, 7, 5]));
console.log(mergeSort([10, 80, 30, 90, 40, 50, 70]));



function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    var middle = arr.length >> 1; //Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, middle));
    var right = mergeSort(arr.slice(middle));
    return merge(left, right);
}


const merge = function (arr1, arr2) {
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;

    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

console.log(merge([1, 3, 5], [2, 4, 6]))
console.log(merge([], [2, 4, 6]))
console.log(merge([1, 3, 5], []))


const mergeSort = function (arr) {
    if (arr.length < 2) return arr
    let mid = arr.length >> 1 // not (0 + arr.length - 1) / 2
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([1, 3, 5, 2, 4, 6]))


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

// find the mid
const mergeSort = function (arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2) //let mid = parseInt(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
// console.log(merge([100, 200], [1, 2, 3, 5, 6]))
console.log(mergeSort([100, 200, 1, 2, 3, 5, 6]))


// merge two sorted array
const merge = function (arr1, arr2) {
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1
    let i = 0
    let j = 0
    let result = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result;
}

const mergeSort = function (arr) {
    if (arr.length < 2) return arr; // base case : for recursive, it is needed
    let mid = parseInt(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([5, 3, 2, 6, 0, 4, -1, 9]))
