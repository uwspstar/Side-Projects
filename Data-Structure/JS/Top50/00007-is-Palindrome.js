// 1: recursive 
// is it is integer, without using str function, how you do it ? ( see twitter)

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

// covert arr
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

const isPalindromeRecursive = function (str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    // str.slice(beginIndex[, endIndex])
    if (str.slice(0, 1) === str.slice(-1)) return isPalindromeRecursive(str.slice(1, -1));
    return false;
}

console.log(isPalindromeRecursive('tacocat'));
console.log(isPalindromeRecursive('amanaplanacanalpanama'));
console.log(isPalindromeRecursive('amanaplanacanalpandemonium'));

// 2 : meet in middle
const isPalindromeMeetInMiddle = function (str) {
    if (str.length === 1) return false;
    let mid = parseInt(str.length / 2);
    for (let i = 0; i <= mid; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

// 2 pointers : meet in middle
const isPalindromeMeetInMiddle = function (str) {
    if (str.length < 2) return true;
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindromeMeetInMiddle('tacocat')); //true
console.log(isPalindromeMeetInMiddle('amanaplanacanalpanama'));//true
console.log(isPalindromeMeetInMiddle('amanaplanacanalpandemonium')); //false
