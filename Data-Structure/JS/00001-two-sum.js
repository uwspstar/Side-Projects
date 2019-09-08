const twoSum = function (arr, target) {
    if (arr.length === 0) return false;

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