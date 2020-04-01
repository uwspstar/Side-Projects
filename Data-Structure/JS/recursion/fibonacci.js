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