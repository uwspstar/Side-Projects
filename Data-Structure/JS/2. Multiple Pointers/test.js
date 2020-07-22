const twoSum = function (arr, target) {

  if (arr.length < 2) return false; // at least 2 items 
  let mySet = new Set();
  for (let item of arr) {
    if (mySet.has(target - item)) return true;
    mySet.add(item);
  }
  return false;
}

//console.log(2.5 << 1);

console.log(twoSum([1, 2, 3], 2.5));// true
console.log(twoSum([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(twoSum([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(twoSum([], 4)); // false