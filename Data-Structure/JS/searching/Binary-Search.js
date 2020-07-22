// binary Search arr is sorted
// use two pointers, start and end, mid = (start + end) >> 1
// Original Solution
// https://medium.com/jsunderthescope/a-recursive-binary-search-in-javascript-b29efaff64d6
// O(log n) ( the best sort, will be nlogn)
const binarySearch = function (arr, num) {
  if (arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;
  let mid = (start + end) >> 1; // integer

  while (start <= end) { // NOT start < end, need start <= end,
    //let mid = (start + end) >> 1; // more space, put outside same some space
    //console.log('start = ', start, 'end = ', end, 'mid=', mid)
    if (arr[mid] === num) return mid;
    arr[mid] > num ? end = mid - 1 : start = mid + 1;
    mid = (start + end) >> 1;
  }

  return -1;
}
console.log(binarySearch([-1], 5));
console.log(binarySearch([1, 3, 5], 5));
console.log(binarySearch([-1, 0, 1, 3, 5, 6, 7, 10, 20, 30, 50], 5));



// ordered array -- check mergeSort
const binarySearchRecursive = function (arr, num, start = 0, end = arr.length - 1) {
  if (arr.length === 0) return -1;
  if (start <= end) {
    let mid = (start + end) >> 1;
    if (arr[mid] === num) return 1;
    arr[mid] < num ? binarySearchRecursive(arr, num, mid + 1, end)
      : binarySearchRecursive(arr, num, start, mid - 1);
  }
  return -1;
}
console.log(binarySearchRecursive([1, 2, 4, 5], 2));
console.log(binarySearchRecursive([1, 2, 4, 5], 0));
console.log(binarySearchRecursive([1, 2, 3, 4, 5], 3));

const recursiveFunction = function (arr, x, start, end) {
  if (arr.length === 0) return false;

  // Base Condition 
  if (start > end) return false;

  // Find the middle index 
  let mid = (start + end) >> 1; //Math.floor((start + end) / 2);

  // Compare mid with given key x 
  if (arr[mid] === x) return true;

  // If element at mid is greater than x, 
  // search in the left half of mid 
  if (arr[mid] > x)
    return recursiveFunction(arr, x, start, mid - 1);
  else

    // If element at mid is smaller than x, 
    // search in the right half of mid 
    return recursiveFunction(arr, x, mid + 1, end);
}


function binarySearch(arr, elem) {
  if (arr.length === 0) return -1;

  var start = 0;
  var end = arr.length - 1;
  var middle = (start + end) >> 1; //Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) { //<=
    elem < arr[middle] ? end = middle - 1 : start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === elem) {
    return middle;
  }

  return -1;
}

// Refactored Version
function binarySearch(arr, num) {
  if (arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;
  let mid = (start + end) >> 1;

  while (start <= end) { //<=
    if (arr[mid] === num) return mid;
    arr[mid] > num ? mid = end-- : mid = start++;
    mid = (start + end) >> 1;
  }
  return arr[mid] === num ? mid : -1;
}

//[1, 2, 3, 4, 5] mid = (0 + 4) / 2 = 2
//[1, 2, 3, 4, 5] mid = (5) / 2 = 2.5 >> 1
const binarySearch = function (arr, num) {
  if (arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) { // NOT start < end, need start <= end,
    let mid = (start + end) >> 1;

    if (arr[mid] === num) return mid;
    if (arr[mid] > num) {
      end = mid - 1;
    } else start = mid + 1;
  }

  return -1;
}
console.log(binarySearch([-1], 5));
console.log(binarySearch([1, 3, 5], 5));
console.log(binarySearch([-1, 0, 1, 3, 5, 6, 7, 10, 20, 30, 50], 5));

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

// Refactored Version
function binarySearch(arr, elem) {
  if (arr.length === 0) return -1;

  var start = 0;
  var end = arr.length - 1;
  var mid = (start + end) >> 1;

  while (arr[mid] !== elem && start <= end) {
    elem < arr[mid] ? end = mid - 1 : start = mid + 1;
    mid = (start + end) >> 1;
  }

  return arr[mid] === elem ? mid : -1;
}

// ordered array
// use two pointers
const binarySearch = function (arr, num) {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === num;

  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2); // let mid = parseInt(arr.length / 2);

  while (start <= end) {
    if (arr[mid] === num) return true;
    arr[mid] > num ? mid = end-- : mid = start++;
    mid = Math.floor((start + end) / 2)
  }

  return false;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // true
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // true
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // false



