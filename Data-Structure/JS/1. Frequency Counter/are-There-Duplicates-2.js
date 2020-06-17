/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

*/
const areThereDuplicates = function (...arr) {
    if (arr.length < 2) return false
    let set = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) return true
        else set.add(arr[i])
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2))// true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 