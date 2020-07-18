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

const fibonacci = function (n) {
    let memo = {} // or memo with Map
    const fibonacciMemo = function (n) {
        if (n < 3) return 1;
        if (memo[n] !== undefined) return memo[n];
        return memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);

    }
    return fibonacciMemo(n);
}

console.log(fibonacci(40));//102334155
console.log(fibonacci(1000));//4.346655768693743e+208  very fast

const fibonacci2 = function (n) {
    if (n < 3) return 1;
    return result = fibonacci2(n - 1) + fibonacci2(n - 2);
}

//console.log(fibonacci2(40));
console.log(fibonacci2(45)); // 1134903170  very slow

console.log(fibonacciRecursive(7)) // [1, 1, 2, 3, 5, 8, 13]