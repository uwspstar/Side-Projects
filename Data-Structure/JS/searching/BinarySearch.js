// binary Search arr is sorted
// O(log n)

// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)

/*

function indexOf(arr, elem, offset = 0) {
  // split array in half
  const half = parseInt(arr.length / 2);
  const current = array[half];

  if(current === elem) {
    return offset + half;
  } else if(elem > current) {
    const right = arr.slice(half);
    return indexOf(right, elem, offset + half);
  } else {
    const left = arr.slice(0, half)
    return indexOf(left, elem, offset);
  }
}
*/