//Given two strings, write a method to decide if one is a permutation of the other.
// confirm if the permutation comparison is case sensitive. 
// If two strings are permutations, then we know they have the same characters, but in different orders. 

// A Permutation of a string is another string that contains same characters, only the order of characters can be different. For example, “abcd” and “dabc” are Permutation of each other.

// use sort 
const checkPermutations = function (str1, str2) {
    if (str1.length != str2.length) return false;
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');
    return s1 == s2 ? true : false;
}

console.log(checkPermutations("adogs", "agod"))
console.log(checkPermutations("adogs", "magod"))
console.log(checkPermutations("adog", "agod"))
console.log(checkPermutations("dog", "god"))
console.log(checkPermutations("dogab", "bagod"))

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
