/*
averagePair
Write a function called averagePair. Given a "sorted array" of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints: Time: O(N) Space: O(1)

check "two sum" example, different it is sorted array
check "missing number", sorted array
for "sorted arr", start point = 0, end point = arr.length - 1 , think about binary search idea
*/

const averagePair = function (arr, num) {
    if (arr.length < 2) return false;  // need a pair (two items)

    let start = 0;
    let end = arr.length - 1;

    //O(N)
    while (start < end) {
        let average = (arr[start] + arr[end]) / 2
        // average = (arr[start] + arr[end]) >> 1; // integer 
        if (average === num) return true;
        average > num ? end-- : start++
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5))// true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false


// similar as two sum O(N)
const averagePair = function (arr, num) {
    if (arr.length < 2) return false;  // need a pair (two items)
    let target = num * 2; //num << 1; // only integer
    //console.log('target = ', target);
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(target - arr[i])) return true;
        set.add(arr[i]);
    }
    return false;
}

const twoSum = function (arr, target) {

    if (arr.length < 2) return false; // at least 2 items 
    let mySet = new Set();
    for (let item of arr) {
        if (mySet.has(target - item)) return true;
        mySet.add(item);
    }
    return false;
}