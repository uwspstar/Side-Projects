/*
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
const selectionSort = function (arr) {
    let len = arr.length
    if (len < 2) return arr
    for (let i = 0; i < len; i++) {
        let smallIndex = i
        for (let j = i + 1; j < len; j++) { // j = i + 1
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j
            }
        }
        if (smallIndex !== i) {
            [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]]
        }
        
    }
    return arr
}

const selectionSort1 = function (arr) {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        let smallIdx = i;
        for (let j = smallIdx + 1; j < arr.length; j++) {
            if (arr[smallIdx] > arr[j]) {
                smallIdx = j;
            }
        }
        [arr[i], arr[smallIdx]] = [arr[smallIdx], arr[i]];
    }
    return arr;
}

const selectionSort2 = function (arr) {
    let len = arr.length
    if (len < 2) return arr
    for (let i = 0; i < len; i++) {
        let smallIndex = i
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j
            }
        }
        [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]]
    }
    return arr
}

console.log(selectionSort([5, 3, 2, 6, 9, 1, 0])) //[0, 1, 2, 3, 5, 6, 9]
console.log(selectionSort([5, 4, 3, 2, 1])) //[2,3,5,6,9]
console.log(selectionSort([5, 3, 2, 6, 9])) //[2,3,5,6,9]

/*
repeat (numOfElements - 1) times

  set the first unsorted element as the minimum

  for each of the unsorted elements

    if element < currentMinimum

      set element as new minimum

  swap minimum with first unsorted position
*/