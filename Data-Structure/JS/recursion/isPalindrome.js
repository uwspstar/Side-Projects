/*
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

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