let arr = [1, 2, 3, 4];
let result1 = arr.reduce(function (prev, cur, index, array) {

    return prev + cur;
});
console.log(arr, result1); //[ 1, 2, 3 ] 10

let max = arr.reduce(function (prev, cur) {

    return Math.max(prev, cur);
});
console.log(arr, max); // [ 1, 2, 3, 4 ] 4