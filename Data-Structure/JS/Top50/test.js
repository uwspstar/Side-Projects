//[1,1,2,3,5,8,...]
const fibonacci = function (n) {
    if (n < 3) return 1;
    return fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(2));
console.log(fibonacci(4));