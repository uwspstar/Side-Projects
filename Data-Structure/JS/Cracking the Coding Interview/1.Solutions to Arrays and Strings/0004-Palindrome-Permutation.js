/*
- https://leetcode.com/articles/palindrome-permutation/

Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat"; "atc o eta"; etc.)

*/
const palindromePermutation = function (str) {

}
console.log(palindromePermutation("taco ocat")); //true
console.log(palindromePermutation("taco cat")); //false
console.log(palindromePermutation("atc o eta")); //false



const palindrome = function (str) {

    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        //console.log('i=', i,'str[i] = ', str[i], 'str[len - 1 - i] =', str[len - 1 - i])
        if (str[i] != str[len - 1 - i]) return false;
    }
    return true;
}
console.log(palindrome("taco ocat")); //true
console.log(palindrome("taco cat")); //false
console.log(palindrome("atc o eta")); //false