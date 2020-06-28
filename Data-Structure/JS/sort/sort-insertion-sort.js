const arr = [0, 1, 5, 4, 3, 2, 6];

/*
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

*/
const insertionSort = function (arr) {
    let i, j;
    for (i = 1; i < arr.length; i++) {
        let current = arr[i]; // start with second elment
        for (j = i - 1; j >= 0; j--) { // sort left array
            if (current < arr[j]) {
                arr[j + 1] = arr[j];
            } else break;
        }
        arr[j + 1] = current; // find the rigth positon [j +1 ] to insert the element
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