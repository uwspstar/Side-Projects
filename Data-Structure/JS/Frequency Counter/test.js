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

const same = function (arr1, arr2) {
    if (arr1.length != arr2.length) return false

    let obj1 = new Map()
    let obj2 = new Map()

    for (let i = 0; i < arr1.length; i++) {
        if (!obj1.has(arr1[i])) {
            obj1.set(arr1[i], 1)
        } else {
            obj1.set(arr1[i], obj1.get(arr1[i]) + 1)
        }

        if (!obj2.has(arr2[i])) {
            obj2.set(arr2[i], 1)
        } else {
            obj2.set(arr2[i], obj2.get(arr2[i]) + 1)
        }
    }

    console.log(obj1)
    console.log(obj2)
}

console.log(same([1, 2, 3, 2], [4, 4, 1, 9])) // true
//console.log(same([1, 2, 3], [1, 9])) // false
//console.log(same([1, 2, 1], [4, 4, 1])) // false