/*
Multiple Pointers - isSubsequence (order matters)
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M) Space Complexity - O(1) 
*/
const isSubsequence = function (str1, str2) {

    if (str1.length === 0 || str2.length === 0) return false

    let i = 0
    let j = 0
    while (j < str2.length) {
        if (str1[i] === str2[j]) i++ 
        if (i === str1.length) return true //str1.length because last i++
        j++
    }
    return false
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)

  