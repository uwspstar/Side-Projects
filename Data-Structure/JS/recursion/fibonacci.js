/*
EASY
*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

const fibonacci = function (n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fib(n) {
    // add whatever parameters you deem necessary - good luck! 
    let result = [];
    function help(num) {
        if (num <= 2) return 1;
        if (result[num] !== undefined) return result[num];
        return result[num] = help(num - 1) + help(num - 2);
    }
    help(n)
    return result[n]
}

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

console.log(fibonacci(7)); // [1, 1, 2, 3, 5, 8, 13]

const fibonacciArray = function (n) {
    if (n < 2) return [1]; // n = 1, one element
    if (n < 3) return [1, 1]; // n = 2 , return [1, 1]
    let result = [1, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

const fibonacciArray = function (n) {
    if (n < 2) return [1]; // n = 1, one element
    if (n < 3) return [1, 1]; // n = 2 , return [1, 1]
    let result = [1, 1];
    function help(num) {
        for (let i = 2; i < num; i++) {
            result.push(result[i - 1] + result[i - 2]);
        }
    }
    help(n);
    return result;
}

console.log(fibonacciArray(3)); // [ 1, 1, 2 ]
console.log(fibonacciArray(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciArray(5)); // [ 1, 1, 2, 3, 5 ]