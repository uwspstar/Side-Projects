//Array.prototype.filter()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//creates a new array with all elements that pass the test implemented by the provided function.
// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
// callback Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise.

const newArr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].filter(word => word.length > 6)

console.log(newArr) // expected output: Array ["exuberant", "destruction", "present"]

const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(arr.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// find odd
console.log(arr.filter(num => num & 1))
// find even
console.log(arr.filter(num => !(num & 1)))
console.log(arr.filter(num => (num % 2 === 0)))