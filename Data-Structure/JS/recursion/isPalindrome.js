/*
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

*/

const isPalindrome = function (str) {
    if (str.length === 1) return true // base case 1 has odd 
    if (str.length === 2) return  // base case 2 has even
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false
}


const isPalindrome = function (str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] !== str[str.length - 1]) return false;
    str = str.slice(1);
    str = str.slice(0, -1);
    return isPalindrome(str);
}


function isPalindromeDemo(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindromeDemo(str.slice(1, -1));

}
console.log(isPalindrome("abccba"));
console.log(isPalindrome("abcdcba"));
console.log(isPalindrome("aebccba"));
console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


function isPalindrome(str) {
    if (str.length < 2) return true
    let str2 = str.split('').reverse().join('')
    if (str !== str2) return false
    return true
}

const isPalindromeRecursive = function (str) {
    if (str.length === 1) return true
    if (str.length === 2) return str[0] === str[1]
    // str.slice(beginIndex[, endIndex])
    if (str.slice(0, 1) === str.slice(-1)) return isPalindromeRecursive(str.slice(1, -1))
    return false
}

console.log(isPalindromeRecursive('tacocat')) // true
console.log(isPalindromeRecursive('amanaplanacanalpanama')) // true
console.log(isPalindromeRecursive('amanaplanacanalpandemonium')) //false