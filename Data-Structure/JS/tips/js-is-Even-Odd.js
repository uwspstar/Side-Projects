function isEvenOrOdd(n) {
    return n & 1 ? 'Odd' : 'Even';
}

function isEvenOrOdd(n) {
    return n % 2 ? 'Odd' : 'Even';
}

function isEven(int) {
    return (int & 1) === 0;
}

console.log(isOdd(34)); // false
console.log(isOdd(-63)); // true
console.log(isEven(-12)); // true
console.log(isEven(199)); // false

const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(arr.filter(num => num & 1)); // find odd


console.log(arr.filter(num => !(num & 1))); // find even
console.log(arr.filter(num => (num % 2 === 0))); // find even