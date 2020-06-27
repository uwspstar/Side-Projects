// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21 =  6 + 5 + 4 + 3 + 2 + 1
// recursiveRange(10) // 55 = 10 + ... + 1

function recursiveRange(n) {
    if (n < 0) return undefined
    if (n === 0) return 0
    return n + recursiveRange(n - 1)
}

console.log(recursiveRange(6))
console.log(recursiveRange(10))
 