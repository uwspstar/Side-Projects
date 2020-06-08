/*
https://www.youtube.com/watch?v=9kmUaXrjizQ

https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1: Input: "()" Output: true

Example 2: Input: "()[]{}" Output: true

Example 3: Input: "(]" Output: false

Example 4: Input: "([)]" Output: false

Example 5: Input: "{[]}" Output: true

*/

const validParentheses = function (str) {
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        } else if (str[i] === ')') {
            if (str[i - 1] !== '(') return false
            else stack.pop('(')
        } else if (str[i] === '}') {
            if (str[i - 1] !== '{') return false
            else stack.pop('{')
        } else if (str[i] === ']') {
            if (str[i - 1] !== '[') return false
            else stack.pop('[')
        }
        //console.log(stack)
    }
    return stack.length === 0
}

console.log(validParentheses("()[]{}")) //true
console.log(validParentheses("([)]")) // false
console.log(validParentheses("][")) // false
console.log(validParentheses("]()()[")) // false