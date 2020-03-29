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

console.log(firstNoneRepeatItem("aaabcccd"));
console.log(firstNoneRepeatItem("aaabcccd"));
console.log(firstNoneRepeatItem("aaabbcdcede"));