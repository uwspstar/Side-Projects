/*
EASY
*/

const fibonacci = function (n) {
    if (n <= 2) return 1;
    let result = [1, 1];
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n - 1];
}

function fibonacci(n) {

    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacci = function (n) {
    if (n < 3) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(7)) // [1, 1, 2, 3, 5, 8, 13]


const fibonacciArray = function (n) {
    if (n < 2) return [1] // n = 1, one element
    if (n < 3) return [1, 1] // n = 2 , return [1, 1]
    let result = [1, 1]
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}