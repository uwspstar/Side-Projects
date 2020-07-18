/*
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

*/
const isPalindromeRecursive = function (arr) {
    if (arr.length < 2) return true;
    return arr[0] === arr[arr.length - 1] ?
        isPalindromeRecursive(arr.slice(1, -1)) : false; // 
        // cannot use arr.shift().pop() 
        // arr.shift() is one item
        // arr.pop() is one item
        // A negative index can be used, indicating an offset from the end of the sequence. slice(1,-1) extracts the second element through the second-to-last element in the sequence. 
        // slice(1,-1) remove last one and first one
}

console.log(isPalindromeRecursive('tacocat'))
console.log(isPalindromeRecursive('amanaplanacanalpanama'))
console.log(isPalindromeRecursive('amanaplanacanalpandemonium'))


