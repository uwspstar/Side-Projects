/*
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

*/
const isPalindromeRecursive = function (str) {
    if (str.length < 2) return true;
    let arr = str.split('');
    let start = arr.shift();
    let end = arr.pop(); 
    console.log('start=', start, 'end=', end);
    return start === end ?
        isPalindromeRecursive(arr.join('')) : false;
}

console.log(isPalindromeRecursive('tacocat'))
console.log(isPalindromeRecursive('amanaplanacanalpanama'))
console.log(isPalindromeRecursive('amanaplanacanalpandemonium'))


