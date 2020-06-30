//The sort method can be conveniently used with function expressions:
// JS sort() sort str, sort nums, need to use customize sort function
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]