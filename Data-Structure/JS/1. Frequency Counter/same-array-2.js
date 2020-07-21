// q1 : has negative number inside array ?
// using new Map() instead of using {}
// But the plain object has a limitation: its keys have to be strings (or rarely used symbols).

// https://dmitripavlutin.com/maps-vs-plain-objects-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Map.prototype.get(key)
// Map.prototype.has(key)
// Map.prototype.set(key, value)
// Map.prototype.keys()
// Map.prototype.values()
// Map.prototype.forEach(callbackFn[, thisArg])

const same = function (arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < arr1.length; i++) {
        let k1 = arr1[i];
        let k2 = arr2[i];
        map1.has(k1) ? map1.set(k1, map1.get(k1) + 1) : map1.set(k1, 1);
        map2.has(k2) ? map2.set(k2, map2.get(k2) + 1) : map2.set(k2, 1);
    }

    for (let key of map1.keys()) {
        if (map2.get(key) !== map1.get(key ** 2)) return false;
    }

    return true;

}


console.log(same([1, 2, 2, 3, 3], [9, 4, 1, 4, 9])) // true
console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3, 2], [4, 4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false

const same = function (arr1, arr2) {
    if (arr1.length != arr2.length) return false;

    let obj1 = new Map();
    let obj2 = new Map();

    for (let i = 0; i < arr1.length; i++) {
        if (!obj1.has(arr1[i])) {
            obj1.set(arr1[i], 1);
        } else {
            obj1.set(arr1[i], obj1.get(arr1[i]) + 1);
        }

        if (!obj2.has(arr2[i])) {
            obj2.set(arr2[i], 1);
        } else {
            obj2.set(arr2[i], obj2.get(arr2[i]) + 1);
        }
    }

    for (let key of obj1.keys()) {
        if (!obj2.has(key ** 2)) return false;
        if (obj2.get(key ** 2) !== obj1.get(key)) return false;
    }

    console.log(obj1)
    console.log(obj2)

    return true;
}
console.log(same([1, 2, 2, 3, 3], [9, 4, 1, 4, 9])) // true
console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3, 2], [4, 4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false