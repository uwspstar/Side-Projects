

// recursive :
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