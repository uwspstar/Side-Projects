/*
O(N^2)
Random items sort, very slow
https://www.toptal.com/developers/sorting-algorithms

Selection Sort ( select smallest each time)
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position 
every time find the smallest, and replace it with the sort start position, start from index[0]

Selection Sort Pseudocode

Store the first element as the smallest value you've seen so far.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values.
Repeat this with the next element until the array is sorted.

*/
// O(N^2)
// each loop, remember the smallest item index, and swap the position,
// each loop to put the smallest item in left side, 
// find the smallest item index, and swap later
// outer loop control looping times
// inner loop find the smallest index

const selectionSort = function (arr) {
    if (arr.length < 2) return arr;

    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    for (let i = 0; i < arr.length - 1; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }
        if (smallIndex !== i) {
            swap(arr, i, smallIndex)
        }
    }
    return arr;
}

console.log(selectionSort([5, 3, 2, 6, 9, 1, 0]));

const selectionSort = function (arr) {
    if (arr.length < 2) return arr;
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    for (let i = 0; i < arr.length; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }
        if (smallIndex !== i) swap(arr, i, smallIndex);
    }
    return arr;
}

const selectionSort2 = function (arr) {

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length - 1; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }
        if (smallIndex !== i) {
            swap(arr, i, smallIndex);
        }
    }
    return arr;
}

const selectionSort3 = function (arr) {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        // smallest index init increase 
        let smallestItemIndex = i;
        // let j = smallestItemIndex + 1 is better let j = smallestItemIndex, first item is smallestItemIndex
        for (let j = smallestItemIndex + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestItemIndex]) {
                smallestItemIndex = j;
            }
        }
        if (smallestItemIndex !== i) {
            [arr[i], arr[smallestItemIndex]] = [arr[smallestItemIndex], arr[i]];
        }
    }

    return arr;
}

const selectionSort4 = function (arr) {
    let len = arr.length;
    if (len < 2) return arr;
    for (let i = 0; i < len; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < len; j++) { // j = i + 1
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }
        if (smallIndex !== i) {
            [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]];
        }

    }
    return arr;
}

const selectionSort5 = function (arr) {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        let smallIdx = i;
        // j should use j = smallIdx + 1
        for (let j = smallIdx + 1; j < arr.length; j++) {
            if (arr[smallIdx] > arr[j]) {
                smallIdx = j;
            }
        }
        [arr[i], arr[smallIdx]] = [arr[smallIdx], arr[i]];
    }
    return arr;
}

const selectionSort6 = function (arr) {
    let len = arr.length
    if (len < 2) return arr
    for (let i = 0; i < len; i++) {
        let smallIndex = i
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j
            }
        }
        [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]];
    }
    return arr
}


/*
repeat (numOfElements - 1) times

  set the first unsorted element as the minimum

  for each of the unsorted elements

    if element < currentMinimum

      set element as new minimum

  swap minimum with first unsorted position
*/