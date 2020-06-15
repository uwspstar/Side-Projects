const validAnagram = function (str1, str2) {
    if (str1.length !== str2.length) return false

    let map1 = new Map()
    let map2 = new Map()

    for (let i = 0; i < str1.length; i++) {
        map1.has(str1[i]) ? map1.set(str1[i], map1.get(str1[i]) + 1) : map1.set(str1[i], 1)
        map2.has(str2[i]) ? map2.set(str2[i], map2.get(str2[i]) + 1) : map2.set(str2[i], 1)
    }

    for (let key of map1.keys()) {
        if (map2.get(key) !== map1.get(key)) return false
    }

    return true

}

console.log(validAnagram("abcb", "dbca")) // false
console.log(validAnagram("abcd", "dbca")) // true
console.log(validAnagram("mymydog", "mygodym")) // true
