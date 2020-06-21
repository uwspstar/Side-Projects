/*
https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66

fast/Catchup
This is very similar to the first kind, except, instead of incrementing the slow pointer up, you simply move it up the fast pointer’s location and then keep moving the fast pointer up. It sort of “jumps” to the index of the fast pointer when a certain condition is met.

-------------------------------------
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
Time Complexity - O(n)

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
arr = arr.slice(start, end)
include start , not include end

*/

const findLongestSubstring = function (str) {
    if (str.length === 0) return 0

    let start = 0
    let end = 0
    let maxLen = -Infinity
    let arr = []

    while (start < str.length) {
        //'rithmschool'
        let index = arr.indexOf(str[start])
        if (index > -1) {
            end = index
            arr = arr.slice(end + 1, start)
        }

        arr.push(str[start])
        maxLen = Math.max(maxLen, arr.length)

        start++

    }

    return maxLen === -Infinity ? 0 : maxLen
}

console.log(findLongestSubstring('rithmschool')) // 7

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6