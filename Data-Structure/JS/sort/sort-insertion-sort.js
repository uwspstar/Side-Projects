const arr = [0, 1, 5, 4, 3, 2, 6];

/*
Insertion Sort
Builds up the sort by gradually creating a larger left half which is always sorted

Insertion : start from second element, move to index , insert the elemment to left sorted array

Insertion Sort Pseudocode

- Start by picking the second element in the array
Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted
*/
const insertSort = function (arr) {
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