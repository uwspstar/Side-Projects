/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

use new Set() 
*/
const areThereDuplicates = function (...arr) {
    if (arr.length < 2) return false
    return (arr.length !== (new Set(arr)).size)
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2));// true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 