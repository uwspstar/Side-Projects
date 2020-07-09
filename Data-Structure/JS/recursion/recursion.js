// https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547214#overview

// 1*2*3*4*...
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log('factorial(5) = ' + factorial(5));
console.log('factorial(3) = ' + factorial(3));