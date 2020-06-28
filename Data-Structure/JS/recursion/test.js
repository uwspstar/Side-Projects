const findMissingNumber2 =  function (arr) {
    let n = arr.length + 1
    if (arr.length === 0) return 1
    if (arr[0] !== 1) return 1
    let sumTotal = n / 2 * (n  + 1) 
    console.log(sumTotal)
    for (let i = 0; i < arr.length; i++) {
        sumTotal -= arr[i]
    }
    return sumTotal
}
console.log(findMissingNumber2([1, 2, 4, 6, 3, 7, 8]))

const findMissingNumber =  function (arr) {
    let n = arr.length + 1
    if (arr.length === 0) return 1
    if (arr[0] !== 1) return 1
    let sumTotal = n / 2 * (n  + 1)
    let sum = 0
    console.log(sumTotal)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
    return sumTotal - sum
}
console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8]))

/*
const findMissingNumber =  function (arr) {
    let n = arr.length + 1
    if (arr.length === 0) return 1
    if (arr[0] !== 1) return 1
    let sumTotal = n / 2 * (n  + 1)
    let sum = 0
    console.log(sumTotal)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
    return sumTotal - sum
}
console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8]))
//[1, 2, 3, 4, 5, 6, 7] //sum = 28


// ask if the arr is sorted, if it is sorted
const findMissingNumberSorted =  function (arr) {
    if (arr.length === 0) return 1
    if (arr[0] !== 1) return 1
    //if (arr.length === 1) return arr[0] === 1 ? 0 : 1 
    let arrSort  = arr.sort()
    for (let i = 1; i < arrSort.length; i++) {
        if (arrSort[i] !== (i + 1)) return arrSort[i - 1] + 1
    }
    return 1
}
console.log(findMissingNumberSorted([1, 2, 4, 6, 3, 7, 8]))


Input: arr[] = {1, 2, 4, 6, 3, 7, 8} Output: 5
Explanation: The missing number from 1 to 8 is 5

Input: arr[] = {1, 2, 3, 5} Output: 4
Explanation: The missing number from 1 to 5 is 4


// O(N^2)
// each loop, remember the smallest item index, and swap the position, each loop to put the smallest item in left side, 
const selectionSort = function (arr) {
    if (arr.length < 2) return arr
    for (let i = 0; i < arr.length; i++) {
        // smallest index init increase 
        let smallestItemIndex = i
        // let j = smallestItemIndex + 1 is better let j = smallestItemIndex, first item is smallestItemIndex
        for (let j = smallestItemIndex + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestItemIndex]) {
                smallestItemIndex = j
            }
        }
        if (smallestItemIndex !== i) {
            [arr[i], arr[smallestItemIndex]] = [arr[smallestItemIndex], arr[i]]
        }
    }

    return arr
}

console.log(selectionSort([5, 3, 2, 6, 9, 1, 0]))

const bubbleSort = function (arr) {
    // left point, right point, each time find the biggest and put right side
    if (arr.length < 2) return arr
    for (let i = arr.length - 1; i >= 0; i--) {
        let swap = false
        for (let j = 0; j < i; j++) {
            // if arr[j] < arr[j + 1] return arr will be descending
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swap = true
            }
        }
        if (!swap) break  // right side has been sorted
    }
    return arr

}
console.log(bubbleSort([5, 3, 2, 6, 9, 1, 0]))




const isPalindrome = function (str) {
    if (str.length === 1) return true // base case 1 has odd
    if (str.length === 2) return  // base case 2 has even
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false
}

console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))




// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false



function someRecursive(arr, callback) {
    if (arr.length === 0) return false
    if (callback(arr[0])) return true
    return someRecursive(arr.slice(1), callback)
}

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
const isPalindrome = function (str) {
    if (str.length === 1) return true
    if (str.length === 2) return str[0] === str[1]
    // str.slice(beginIndex[, endIndex])
    if (str.slice(0,1) === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false
}

console.log(isPalindromeRecursive('tacocat'))
console.log(isPalindromeRecursive('amanaplanacanalpanama'))
console.log(isPalindromeRecursive('amanaplanacanalpandemonium'))

function isPalindrome(str) {
  if (str.length < 2) return true
  let str2 = str.split('').reverse().join('')
  if (str !== str2) return false
  return true
}
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))

function reverseStr (str) {
    let arr = str.split('').reverse().join()
    // only arr has reverse function
    return str
}

const isBalanceWithMap = function (str) {

    if (str.length % 2 !== 0) return false
    let map = new Map ()
    map.set("(", ")")
    map.set("{", "}")
    map.set("[", "]")
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i])) {
            stack.push(str[i])
        } else {
            let lastKey = stack.pop()
            if (map.get(lastKey) !== str[i]) return false
        }
    }
    return stack.length === 0
}

console.log(isBalanceWithMap("[]{}()"))
console.log(isBalanceWithMap("[}()"))
console.log(isBalanceWithMap("[{()}]"))
console.log(isBalanceWithMap(")[{()}]("))

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]


const isBalance = function (str) {
    let stack = [];
    let map = {
      "(" : ")",
      "{" : "}",
      "[" : "]"
    }

    let arr = [...str];
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
        stack.push(arr[i]);
      } else {
        let last = stack.pop();
        if(map[last] !== arr[i]) {
          return false
        }
      }
    }

    return stack.length === 0
  }




const twoSum = function (arr, target) {
    let set = new Set()
    for (let i = 0; i < arr.length; i++) {
        let num = target - arr[i]
        if (set.has(num))  return true
        set.add(arr[i])
    }
    return false
}

console.log(twoSum([-1, 7, 11, 15], 14));
console.log(twoSum([-1, 7, 11, 15], 13));
console.log(twoSum([2, 7, 11, 15], 13));

const twoSum = function (arr, target) {
    let mySet = new Set();
    for (let i = 0; i < arr.length; i++) {
      if(mySet.has(target - arr[i])) return true;
      mySet.add(arr[i]);
    }
    return false;
  }




//swap only work for array, not for string


function reveresStrRecursive(str) {
    if (str.length < 2) return str
    //return reveresStrRecursive(str.substring(1, str.length)) + str[0];
    return reveresStrRecursive(str.slice(1, str.length)) + str[0];
}
console.log(reveresStrRecursive('awesome'))

function reverse(str) {
    if (str.length < 2) return str
    let mid = parseInt(str.length / 2)
    let arr = str.split('')
    for (let i = 0; i < mid; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }
    return arr.join('')
}
console.log(reverse('awesome'))

function reverseStr2(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
console.log(reverseStr2('awesome'))

function reverseStr(str) {
    let arr = str.split('').reverse()
    // only arr has reverse function
    return arr.join('')
}
console.log(reverseStr('awesome'))

  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'



// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
    // add whatever parameters you deem necessary - good luck!
    let result = []
    function help(num) {
        if (num <= 2) return 1
        if (result[num] !== undefined) return result[num]
        return result[num] = help(num - 1) + help(num - 2)
    }
    help(n)
    return result[n]
}

console.log(fib(35))

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21 =  6 + 5 + 4 + 3 + 2 + 1
// recursiveRange(10) // 55 = 10 + ... + 1

function recursiveRange(n) {
    if (n < 0) return undefined
    if (n === 0) return 0
    return n + recursiveRange(n - 1)
}

console.log(recursiveRange(6))
console.log(recursiveRange(10))

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

const productOfArray2 = function (arr) {
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0]
    return arr[arr.length - 1] * productOfArray(arr.slice(0, arr.length - 1))
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60


//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
// 4! = 4 * 3 * 2 * 1
function factorial(n) {
    if (n < 2) return 1
    return n * factorial(n - 1)
}
console.log(factorial(7))


// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(n, p) {
    if (p === 0) return 1
    if (p === 1) return n
    if (n <= 1) return n
    return n * power(n, p - 1)
}
//base, exponent
console.log(power(2, 0))
console.log(power(2, 2))
console.log(power(2, 4))
console.log(power(3, 3));
console.log(power(8, 1));


const fibonacciArray = function (n) {
    if (n < 2) return [1] // n = 1, one element
    if (n < 3) return [1, 1] // n = 2 , return [1, 1]
    let result = [1, 1]
    function help(num) {
        for (let i = 2; i < num; i++) {
            result.push(result[i - 1] + result[i - 2])
        }
    }
    help(n)
    return result
}

console.log(fibonacciArray(3)) // [ 1, 1, 2 ]
console.log(fibonacciArray(4)) // [ 1, 1, 2, 3 ]
console.log(fibonacciArray(5)) // [ 1, 1, 2, 3, 5 ]


// 4! = 4 * 3 * 2 * 1
const factorial = function (n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}
console.log(factorial(3)) // 6
console.log(factorial(4)) // 24


const fibonacci = function (n) {
    if (n < 3) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(7)) // 13 :  [1, 1, 2, 3, 5, 8, 13]

const fibonacciArray = function (n) {
    if (n < 2) return [1] // n = 1, one element
    if (n < 3) return [1, 1] // n = 2 , return [1, 1]
    let result = [1, 1]
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}

console.log(fibonacciArray(7)) // 13 :  [1, 1, 2, 3, 5, 8, 13]



const fibonacci = function (n) {
    if (n <= 2) return 1;
    let result = [1, 1];
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n - 1];
}
*/
