/*
https://www.youtube.com/watch?v=y2BD4MJqV20
https://www.youtube.com/watch?v=g3R-pjUNa3k

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
O(n^2)

5. Longest Palindromic Substring
Medium  

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1: Input: "babad" Output: "bab"
Note: "aba" is also a valid answer. 

Example 2: Input: "cbbd" Output: "bb"
*/

const longestPalindrome = function (str) {
    if (str.length < 2) return str

};

console.log(longestPalindrome("cbbd")) //babab
console.log(longestPalindrome("racecar")) //racecar
console.log(longestPalindrome("babad")) //bab
console.log(longestPalindrome("babab")) //babab
console.log(longestPalindrome("ababbad")) //abba
