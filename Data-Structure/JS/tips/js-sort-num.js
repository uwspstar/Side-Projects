//The sort method can be conveniently used with function expressions:
// JS sort() sort str, sort nums, need to use customize sort function

var numbers = [4, 2, 5, 1, 3];

[4, 2, 5, 1, 3].sort((a,b)=> a - b) //arrow function

numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
// https://www.tutorialspoint.com/which-algorithm-does-the-javascript-arrayhashsort-function-use

[4, 2, 5, 1, 3].sort((a,b)=> a - b)

console.log([4, 2, 5, 1, 3].sort((a,b)=> a - b))