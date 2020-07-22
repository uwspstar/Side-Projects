/*
2 str have same characters, order does not matter;
*/

const validAnagram = function (str1, str2) {
    if (str1.length !== str2.length) return false;

    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < str1.length; i++) {
        let k1 = str1[i];
        let k2 = str2[i];

        map1.has(k1) ? map1.set(k1, map1.get(k1) + 1) : map1.set(k1, 1);
        map2.has(k2) ? map2.set(k2, map2.get(k2) + 1) : map2.set(k2, 1);
    }

    for (let key of map1.keys()) {
        if (map2.get(key) !== map1.get(key)) return false;
    }

    return true;

}

console.log(validAnagram("abcb", "dbca")); // false
console.log(validAnagram("abcd", "dbca")); // true
console.log(validAnagram("mymydog", "mygodym")); // true
