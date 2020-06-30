/*
https://www.toptal.com/developers/sorting-algorithms
https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e

BubbleSort Pseudocode
Let's visualize this!

O(N^2)
Start out loop from with a variable called i the end of the array towards the beginning
Start an inner loop with a variable called j from the beginning until i - 1
If arr[j] is greater than arr[j+1], swap those two values!
Return the sorted array
*/

const arr = [0, 1, 5, 4, 3, 2, 6];

const bubbleSort = function (arr) {

  if (arr.length < 2) return arr;
  // use two point, from left and right
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(arr, i);
  }
  return arr;
}

console.log(bubbleSort(arr));


const bubbleSort2 = function (arr) {
  let len = arr.length
  if (len < 2) return arr

  for (let i = 0; i < len - 1; i++) {
    let swap = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swap = true;
      }
    }
    if (!swap) break
  }
  return arr
}


/*
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}


bubbleSort([8,1,2,3,4,5,6,7]);
*/


const bubbleSort2 = function (arr) {
  let swap = true
  do {
    swap = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swap = true
      }
    }
  }
  while (swap)
  return arr
}
// [5, 3, 2, 6, 9, 1]
const bubbleSort = function (arr) {
  let len = arr.length
  if (len < 2) return arr
  for (let i = 0; i < len - 1; i++)
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }

  return arr
}

console.log(bubbleSort([5, 3, 2, 6, 9, 1, 0])) 



/*

do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1

    if leftElement > rightElement

      swap(leftElement, rightElement)

      swapped = true

while swapped
*/