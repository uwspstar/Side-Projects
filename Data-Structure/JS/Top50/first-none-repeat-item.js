// first none repeat item
// aaabcccd->b
// abcdacde->b
// aaabbcdcede->-1

// two loop, first loop save to hash table
// second loop find the first 
const firstNoneRepeatItem = function (str) {

    let hashMap = {};
    for (let i = 0; i < str.length; i++) {
        const key = str[i];
        // Conditional (ternary) operator
        hashMap[key] ? hashMap[key]++ : hashMap[key] = 1;

        /*
        if (!hashMap[key]) {
            hashMap[key] = 1;
        } else {
            hashMap[key] += 1;
        }*/

    }
    console.log(hashMap);
    for (let i = 0; i < str.length; i++) {
        if (hashMap[str[i]] == 1) {
            return str[i];
        }
    }
    return -1;
}
const firstNoneRepeatItem2 = function (str) {
    if (str.length === 0) return null
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
       map.get(str[i]) ? map.set(key, map.get(str[i]) + 1) : map.set(key, 1) 
    }
    for (let key in map.keys()) {
        if (map.get(key) === 1) return key
    }
    return -1

}
console.log(firstNoneRepeatItem("aaa")); // -1
console.log(firstNoneRepeatItem("aaabcccd")); //b
console.log(firstNoneRepeatItem("aaabcccd")); //b
console.log(firstNoneRepeatItem("aaabbcdcede")); //c