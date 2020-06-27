
// 4! = 4 * 3 * 2 * 1
const factorial = function (n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}
console.log(factorial(3)) // 6
console.log(factorial(4)) // 24