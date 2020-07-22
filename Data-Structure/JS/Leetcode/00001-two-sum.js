/*
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

same with hashtable

- The Set object lets you store unique values of any type, whether primitive values or object references.

- NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).

*/
// check averagePair
// check binary search concept if arr is sorted

const twoSum = function (arr, target) {
    if (arr.length < 2) return false;

    let mySet = new Set();

    for (let item of arr) {
        if (!mySet.has(item)) {
            mySet.add(item);
        }

        if (mySet.has(target - item)) {
            return true;
        }

    }

    return false;
}


/*
// Use to remove duplicate elements from the array

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]
*/