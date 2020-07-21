/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

 The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

 */

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb'); // inserts at index 1
console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "June"]

["Jan", "Feb", "March", "April", "June"].splice(4, 1, 'May'); 
// replaces 1 element at index 4
// expected output: Array ["Jan", "Feb", "March", "April", "May"]