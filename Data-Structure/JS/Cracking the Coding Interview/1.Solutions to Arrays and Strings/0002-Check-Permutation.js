//Given two strings, write a method to decide if one is a permutation of the other.
// confirm if the permutation comparison is case sensitive. 
// If two strings are permutations, then we know they have the same characters, but in different orders. 

// A Permutation of a string is another string that contains same characters, only the order of characters can be different. For example, “abcd” and “dabc” are Permutation of each other.

// use sort , However, if efficiency is very important, we can implement it a different way

const checkPermutations = function (str1, str2) {

    if (str1.length != str2.length) return false;

    let hashmap1 = {};
    let hashmap2 = {};
    let len = str1.length;

    for (let i = 0; i < len; i++) {
        hashmap1[str1[i]] != undefined ? (hashmap1[str1[i]] = hashmap1[str1[i]] + 1) : (hashmap1[str1[i]] = 1);

        hashmap2[str2[i]] != undefined ? (hashmap2[str2[i]] = hashmap2[str2[i]] + 1) : (hashmap2[str2[i]] = 1);
    }
    console.log('hashmap1', hashmap1);
    console.log('hashmap2', hashmap2)

    for (let key in hashmap1) {
        if (hashmap1.key != hashmap2.key) return false;
    }
    return true;
}
console.log(checkPermutations("adogs", "agod"));


const checkPermutationsJsonStringify = function (str1, str2) {

    if (str1.length != str2.length) return;

    let hashmap1 = {};
    let hashmap2 = {};
    let len = str1.length;
    for (let i = 0; i < len; i++) {
        hashmap1[str1[i]] != undefined ? (hashmap1[str1[i]] = hashmap1[str1[i]] + 1) : (hashmap1[str1[i]] = 1);

        hashmap2[str2[i]] != undefined ? hashmap2[str2[i]] = hashmap2[str2[i]] + 1 : hashmap2[str2[i]] = 1;
    }
    //console.log('hashmap1', hashmap1);
    //console.log('hashmap2', hashmap2)

    // return JSON.stringify(hashmap1) == JSON.stringify(hashmap2)
    // not working, becasue the order is different


}


const checkPermutationswithSort = function (str1, str2) {
    if (str1.length != str2.length) return false;
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');
    return s1 == s2;
}

// O(n) isReverseString is subset of the Permutations string
const isReverseString = function (str1, str2) {

    if (str1.length != str2.length) {
        return false;
    }
    let len = str1.length;

    for (let i = 0; i < len; i++) {
        // console.log('str1[i] = ', str1[i], ' str2[len - i] = ', str2[len - 1 - i]);

        if (str1[i] != str2[len - 1 - i]) return false;
    }
    return true;
}


console.log(checkPermutations("adogs", "agod")) //false
console.log(checkPermutations("adogs", "magod")) //false
console.log(checkPermutations("aaaadog", "agodaaa")) //true
console.log(checkPermutations("doooog", "oogodoo")) //true
console.log(checkPermutations("dogab", "bagod")) //true
