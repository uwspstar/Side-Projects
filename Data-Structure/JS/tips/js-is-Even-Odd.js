function isEvenOrOdd(n) {
    return n % 2 ? 'Odd' : 'Even';
}

function isEvenOrOdd(n) {
    return n & 1 ? 'Odd' : 'Even';
}

function isEven(int) {
    return (int & 1) === 0;
}

console.log(isOdd(34)); // false
console.log(isOdd(-63)); // true
console.log(isEven(-12)); // true
console.log(isEven(199)); // false