/*Given an integer, check if that integer is a palindrome. For this problem do not convert the integer to a string to check if it is a palindrome.

isPalindrome(1234321) // True
isPalindrome(1234322) // False

a>>b = a * (2**b)
*/

const isPalindrome = function (num) {
    if (num < 10) return true;
    while (num > 10) {
        let k = Math.floor(Math.log10(num));
        let last = Math.floor(num % 10);
        let first = Math.floor(num / Math.pow(10, k));
        if (last !== first) return false;
        let num1 = Math.floor(num / 10);
        num = Math.floor(num1 % Math.pow(10, k - 1));
        // console.log('k=', k, 'last=', last, 'first=', first, 'num1', num1, 'num=', num);
    }
    return true;
}
console.log(isPalindrome(1));
console.log(isPalindrome(11));
console.log(isPalindrome(12));
console.log(isPalindrome(1234321));
console.log(isPalindrome(1234322));