// 1: recursive 
const isPalindromeRecursive = function (str) {
    if (str.length === 1) return true
    if (str.length === 2) return str[0] === str[1]
    // str.slice(beginIndex[, endIndex])
    if (str.slice(0, 1) === str.slice(-1)) return isPalindromeRecursive(str.slice(1, -1))
    return false
}

console.log(isPalindromeRecursive('tacocat'))
console.log(isPalindromeRecursive('amanaplanacanalpanama'))
console.log(isPalindromeRecursive('amanaplanacanalpandemonium'))

// 2 : meet in middle
const isPalindromeMeetInMiddle = function (str) {
    if (str.length === 1) return false
    let mid = parseInt(str.length / 2)
    for (let i = 0; i <= mid; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false
    }
    return true
}

console.log(isPalindromeMeetInMiddle('tacocat'))
console.log(isPalindromeMeetInMiddle('amanaplanacanalpanama'))
console.log(isPalindromeMeetInMiddle('amanaplanacanalpandemonium'))
