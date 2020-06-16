const same = function (arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    let map1 = new Map()
    let map2 = new Map()

    for (let i = 0; i < arr1.length; i++) {
        map1.has(arr1[i]) ? map1.set(arr1[i], map1.get(arr1[i]) + 1) : map1.set(arr1[i], 1)
        map2.has(arr2[i]) ? map2.set(arr2[i], map2.get(arr2[i]) + 1) : map2.set(arr2[i], 1)
    }

    for (let key of map1.keys()) {
        if (map2.get(key) !== map1.get(key ** 2)) return false
    }

    return true

}


console.log(same([1, 2, 2, 3, 3], [9, 4, 1, 4, 9])) // true
console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3, 2], [4, 4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false