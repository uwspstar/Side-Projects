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
/*
// pair : means key - value , so we can use two pointers from left and right
// but isBalance cannot use is, example isBalance("[]{}()")
const isBalance = function (str) {
    if (str.length === 0) return false
    if (str.length % 2 !== 0) return false

    let map = new Map()
    map.set("(", ")")
    map.set("{", "}")
    map.set("[", "]")

    let mid = str.length / 2

    for (let i = 0; i <= mid; i++) {
        let key = str[i]
        let value = str[str.length - 1 - i]
        //console.log('key=',key, 'value=',value)
        if (map.get(key) !== value) return false
    }
    return true
}
console.log(isBalance('c'))
console.log(isBalance("[]{}()"))
console.log(isBalance("[}()"))
console.log(isBalance("[{()}]"))
console.log(isBalance(")[{()}]("))
/*
// sortBits([1, 0, 0, 1, 1, 0]) //outputs: [0, 0, 0, 1, 1, 1]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

same with hashtable

- The Set object lets you store unique values of any type, whether primitive values or object references.

- NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).

 
const twoSum = function (arr, target) {
    if (arr.length === 0) return false;

    let mySet = new Set();

    for (let item of arr) {
        if (!mySet.has(item)) {
            mySet.add(item);
        }

        if (mySet.has(target - item)) {
            return true;
        }

    }

    return false;
}


 
// Use to remove duplicate elements from the array 

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)]) 

// [2, 3, 4, 5, 6, 7, 32]
 

const sortBits = function (arr) {
    if (arr.length < 2) return arr
    let fast = 0
    let slow = 0
    while (fast < arr.length) {
        console.log(arr, 'fast=', fast, 'slow=', slow)

        if (arr[fast] === 0) {
            [arr[fast], arr[slow]] = [1, 0]
            slow++
        }
        fast++
    }
    return arr
}
 
[ 1, 0, 0, 1, 1, 0 ] fast= 0 slow= 0
[ 1, 0, 0, 1, 1, 0 ] fast= 1 slow= 0
[ 0, 1, 0, 1, 1, 0 ] fast= 2 slow= 1
[ 0, 0, 1, 1, 1, 0 ] fast= 3 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 4 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 5 slow= 2
[ 0, 0, 0, 1, 1, 1 ]
 
const sortBits2 = function (arr) {
    if (arr.length < 2) return arr
    let start = 0
    let end = arr.length - 1

    while (start < end) {

        console.log(arr, 'start =', start, 'end =', end)

        if (arr[start] === 0) {
            start++
        }
        else if (arr[end] === 0) {
            [arr[start], arr[end]] = [0, 1]
            start++
            end--
        } else {
            end--
        }
    }
    return arr
}

    //console.log(sortBits([1, 0, 0, 1, 1, 0])) //

    //[1, 0, 0, 1, 1, 0]
    // [0]

*/
    