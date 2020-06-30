/*
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344156#overview 

Insertion Sort
Builds up the sort by gradually creating a larger left half which is always sorted

Insertion : start from second element, move to index , insert the element to left sorted array

Insertion Sort Pseudocode

- Start by picking the second element in the array
Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted
 
There is no draft requirement for JS to use a specific sorting algorithm. As many have mentioned here, 
Mozilla uses merge sort. 
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays. The ECMAscript standard does not specify which sort algorithm is to be used

In the insertion sort algorithm, we make the code believe that an item in the array is a sorted list. The algorithm then compares all the items in the array before it and decides where that “sorted list” needs to be inserted in the array.

https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e

We will use nested loops to perform the sorting. 

1. First, we will take an element from the array and check if its greater or smaller than the element next to it. 
2. The outer for loop will start from the second element of the array and will run for the entire length of the array.
3. The inner loop will start from the beginning of the array and will run until the current element of the outer loop. 
4. The inner loop will also reset every time the outer loop’s iterating variable’s value increases.
5. As for the actual sorting, we will compare the outer loops element with the inner loops element. If the outer loop’s element is smaller, then we will move it to the position of the inner loop’s element and vice versa. To do this we will use the array’s slice method ( the insert part )
*/

//assume left is sorted, start second item
const insertionSort = function (arr) {
    if (arr.length === 1) return arr
    //assume left is sorted, start second item
    for (let i = 1; i < arr.length; i++) { 
        let current = arr[i]
        let j = i - 1
        for (; j >= 0; j--) {
            // always compar j item with current value
            if (arr[j] > current) {
                arr[j + 1] = arr[j]
            } else break
        }
        arr[j + 1] = current
    }
    return arr
}
console.log(insertionSort([2, 4, 6, 3, 7, 0])) // [ 0, 2, 3, 4, 6, 7 ]

const insertionSort = function (arr) {
    let i, j;
    for (i = 1; i < arr.length; i++) {
        let current = arr[i]; // start with second element
        for (j = i - 1; j >= 0; j--) { // sort left array
            if (current < arr[j]) {
                arr[j + 1] = arr[j];
            } else break;
        }
        arr[j + 1] = current; // find the right position [j +1 ] to insert the element
    }
    return arr;
}
console.log(insertionSort(arr));

/*
mark first element as sorted

for each unsorted element X

  'extract' the element X

  for j = lastSortedIndex down to 0

    if current element j > X

      move sorted element to the right by 1

    break loop and insert X here
*/