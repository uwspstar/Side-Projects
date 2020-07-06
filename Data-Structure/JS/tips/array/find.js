// Array.prototype.find()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
//not indexOf()
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const num = [5, 12, 8, 130, 44].find(num => num > 10);
console.log(num); // expected output: 12

/*

If you need the index of the found element in the array, use findIndex().
If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks each element for equality with the value instead of using a testing function.
If you need to find if any element satisfies the provided testing function, use Array.prototype.some()

*/