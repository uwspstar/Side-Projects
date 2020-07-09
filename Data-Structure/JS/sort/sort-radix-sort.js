//https://brilliant.org/wiki/radix-sort/#
// https://cs.slides.com/colt_steele/intermediate-sorting-algorithms#/31/0/0
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