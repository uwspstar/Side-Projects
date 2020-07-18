const isPalindromeRecursive = function (str) {
    if (str.length < 2) return true;
    return str[0] === str[str.length - 1] ?
        isPalindromeRecursive(str.slice(1, -1)) : false;
    // cannot use arr.shift().pop() 
    // arr.shift() is one item
    // arr.pop() is one item
    // A negative index can be used, indicating an offset from the end of the sequence. slice(1,-1) extracts the second element through the second-to-last element in the sequence. 
    // slice(1,-1) remove last one and first one
    // string using slice(start[,end]) only
    // arr use arr.slice(), arr.shift(), arr.pop()
}

console.log(isPalindromeRecursive('tacocat'))
console.log(isPalindromeRecursive('amanaplanacanalpanama'))
console.log(isPalindromeRecursive('amanaplanacanalpandemonium'))


