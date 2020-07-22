/*Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:
*/
const sameFrequency = function (num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) return false;

    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < str1.length; i++) {
        let k1 = str1[i];
        let k2 = str2[i];

        map1.get(k1) ? map1.set(k1, map1.get(k1) + 1) : map1.set(k1, 1);
        map2.get(k2) ? map2.set(k2, map2.get(k2) + 1) : map2.set(k2, 1);
    }
    for (let key of map1.keys()) {
        if (map1.get(key) !== map2.get(key)) return false;
    }
    return true;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false


