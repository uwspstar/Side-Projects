
// 4! = 4 * 3 * 2 * 1
const factorial = function (n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}
console.log(factorial(3)) // 6
console.log(factorial(4)) // 24

/*
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
