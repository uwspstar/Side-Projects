// first none repeat item
// aaabcccd->b
// abcdacde->b
// aaabbcdcede->-1

// two loop, first loop save to hash table
// second loop find the first 
// Conditional (ternary) operator
const firstNoneRepeatItem1 = function (str) {

    let hashMap = {};
    for (let i = 0; i < str.length; i++) {
        const key = str[i]; 
        hashMap[key] ? hashMap[key]++ : hashMap[key] = 1; 
    }
    console.log(hashMap);
    for (let i = 0; i < str.length; i++) {
        if (hashMap[str[i]] == 1) {
            return str[i];
        }
    }
    return -1;
}

const firstNoneRepeatItem = function (str) {
    if (str.length === 0) return null

    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1)
    }
    console.log(map)
    // key, value all using of
    for (let key of map.keys()) {
        if (map.get(key) === 1) return key
    }
    return -1

}
console.log(firstNoneRepeatItem("aaa")); // -1
console.log(firstNoneRepeatItem("aaabcccd")); //b
console.log(firstNoneRepeatItem("aaabcccd")); //b
console.log(firstNoneRepeatItem("aaabbcdcede")); // -1