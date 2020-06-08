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

    if (str.length == 0) return true;
    if (str.length % 2 != 0) return false;

    let stack = []

    for (let i = 0; i < str.length; i++) {
        console.log('str[i] = ', str[i])
        console.log('str[i-1] = ', str[i - 1])

        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        }

        if (str[i] === ')') {
            if (stack[stack.length - 1] !== '(') return false
            else stack.pop('(')
        }

        if (str[i] === '}') {
            if (stack[stack.length - 1] !== '{') return false
            else stack.pop('{')
        }

        if (str[i] === ']') {
            if (stack[stack.length - 1] !== '[') return false
            else stack.pop('[')
        }

        console.log('stack = ', stack)
    }
    console.log('stack.length', stack.length)
    return !stack.length 
}

console.log(validParentheses("{[]}")) //true
/*
console.log(validParentheses("()[]{}")) //true
console.log(validParentheses("([)]")) // false
console.log(validParentheses("][")) // false
console.log(validParentheses("]()()[")) //false
*/


var isValid = function(s) {
    
    if(s.length == 0) return true;
    if(s.length % 2 != 0) return false;
    
    let arr = s.split('');
    let stack = [];
    
    for(let i = 0 ; i < arr.length; i++) {
        
        if (arr[i] === '(' || arr[i] ==='{' || arr[i] ==='['){
            stack.push(arr[i]);
        } else if ( arr[i] === ')') {
            if(stack[stack.length - 1] !== '(') return false;
            stack.pop();
        } else if ( arr[i] === '}') {
            if(stack[stack.length-1] !== '{') return false;
            stack.pop();
        } else if ( arr[i] === ']') {
            if(stack[stack.length-1] !== '[') return false;
            stack.pop();
        }   
    }
    
     return !stack.length;
    
};
console.log(isValid("{[]}")) //true