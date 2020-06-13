//a b c b a
const isPalindrome = function (str) {

    let mid = parseInt(str.length / 2) 
    let len = str.length
    for (let i = 0; i <= mid; i++) {
        if (str[i] != str[len - i - 1]) return false
    }
    return true
}
console.log(isPalindrome("dbbd")) //babab
console.log(isPalindrome("cbbd")) //babab
console.log(isPalindrome("racecar")) //racecar
console.log(isPalindrome("babad")) //bab
console.log(isPalindrome("babab")) //babab
console.log(isPalindrome("ababbad")) //abba