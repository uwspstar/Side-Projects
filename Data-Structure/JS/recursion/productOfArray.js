/*
productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

*/

function productOfArray(arr) {
    if (arr.length === 0) return undefined;
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4]));
console.log(productOfArray([10, 2, 3, 4]));


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = function (arr) {
    if (arr.length === 0) return undefined;
    if (arr.length === 1) return arr[0];
    return arr[arr.length - 1] * productOfArray(arr.slice(0, arr.length - 1));
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60