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

    if (str.length < 2) return str.length

    let mySet = new Set()
    let start = 0
    let end = 0
    let max = 0

/*
a b c a b c b b
    e
s   
*/

    while (start < str.length && end < str.length) {

        if (mySet.has(str[end])) {
            mySet.delete(str[start])
            start++
        } else {
            mySet.add(str[end]);
            max = Math.max(max, end - start + 1)
            end++
        }

    }
    return max

};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))




