/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

longest Substring Without Repeating Characters
Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// slide window problem
const lengthOfLongestSubstring = function (str) {
    if (str.length < 2) return str;

    let start = 0;
    let end = 0;
    let j = start;
    let mySet = new Set();
    let max = 0;

    while (j < str.length) {
        if (mySet.has(str[j])) {
            start++;
        } else {
            mySet.add(str[j]);
            end++;
            max = Math.max(mySet.size, max);
        }
        j++
    }
    console.log(mySet);
    return max;

};

console.log(lengthOfLongestSubstring("abcabcbb"))

//"abcabcbb"
//a ab abc abca
//b bc bca bcab
//c ca cab cabc
//a ab abc abcb
//b bc bcb
//c cb cbb
//b bb
