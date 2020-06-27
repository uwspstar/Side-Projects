/*
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
*/


// 4! = 4 * 3 * 2 * 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

const factorial = function (n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}


function factorial(n) {
    if (n < 2) return 1
    return n * factorial(n - 1)
}

console.log(factorial(3)) // 6
console.log(factorial(4)) // 24