// 1 : regular loop
const fibonacci = function (n) {
    if (n <= 2) return 1;
    let result = [1, 1];
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n - 1];
}

// 2 : recursive
const fibonacciRecursive = function (n) {
    if (n < 3) return 1
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(7)) // [1, 1, 2, 3, 5, 8, 13]