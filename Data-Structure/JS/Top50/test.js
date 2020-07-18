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