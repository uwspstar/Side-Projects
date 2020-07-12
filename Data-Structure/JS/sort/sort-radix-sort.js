// https://brilliant.org/wiki/radix-sort/#
// https://cs.slides.com/colt_steele/intermediate-sorting-algorithms#/31/0/0
// 基数排序的时间复杂度是 O(k * n)}，其中n是排序元素个数 k是数字位数。
// https://www.geeksforgeeks.org/radix-sort/
// https://www.youtube.com/watch?v=Nz1KZXbghj8

//step 1 : find max length of num
const getLength = function (num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const getMaxLength = function (arr) {
  if (arr.length === 1) return arr[0].toString().length;
  let maxLength = 1;
  for (let i = 0; i < arr.length; i++) {
    let len = getLength(arr[i]); //arr[i].toString().length;
    maxLength = Math.max(len, maxLength);
  }
  return maxLength;
}

const getDigit = function (num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const radixSort = function (arr) {
  if (arr.length < 2) return arr;
  let maxLength = getMaxLength(arr);
  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets); // reset arr with 0 position, 10 position, 100 position ...
  }
  return arr;
}

console.log(getMaxLength([15, 334, 222, 629, 29, 100, 5098, 50987]));

console.table(radixSort([15, 1, 334, 222, 221, 629, 29, 100, 5098, 50987])) //[0, 1, 2, 


function getDigit(num, i) { // right to left base 10, the right start with 0
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//Array.from({ length: 10 }, () => []); creat 10 empty sub arr

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);

/*
Radix sort is a special sorting algorithm that works on lists of "NUMBERS"

It NEVER makes comparisons between elements!

It exploits the fact that information about the size of a number is encoded in the number of digits.

More digits means a bigger number!

In order to implement radix sort, it's helpful to build a few helper functions first:

getDigit(num, place) - returns the digit in num at the given place value

getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0

54321 , place 4 = Math.floor( |54321| / (10000) )  % 10 = 5 % 10 = 5
54321 , place 3 = Math.floor( |54321| / (1000) )  % 10 = 54 % 10 = 4
54321 , place 2 = Math.floor( |54321| / (1000) )  % 10 = 543 % 10 = 3
10^4 = 10000

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}


function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
*/



/*
Define a function that accepts list of numbers
Figure out how many digits the largest number has
Loop from k = 0 up to this largest number of digits
For each iteration of the loop:
Create buckets for each digit (0 to 9)
place each number in the corresponding bucket based on its kth digit
Replace our existing array with values in our buckets, starting with 0 and going up to 9
return list at the end!
*/


/*

create 10 buckets (queues) for each digit (0 to 9)

for each digit placing

  for each element in list

    move element into respective bucket

  for each bucket, starting from smallest digit

    while bucket is non-empty

      restore element to list
*/
/*

Array.prototype.radixSort = function() {
  let arr = this.slice(0)
  const max = Math.max(...arr)
  let digit = `${max}`.length
  let start = 1
  let buckets = []
  while(digit > 0) {
    start *= 10
    for(let i = 0; i < arr.length; i++) {
      const index = arr[i] % start
      !buckets[index] && (buckets[index] = [])
      buckets[index].push(arr[i])
    }
    arr = []
    for(let i = 0; i < buckets.length; i++) {
      buckets[i] && (arr = arr.concat(buckets[i]))
    }
    buckets = []
    digit --
  }
  return arr
}
const arr = [1, 10, 100, 1000, 98, 67, 3, 28, 67, 888, 777]
console.log(arr.radixSort())
*/