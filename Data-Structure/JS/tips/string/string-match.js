// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

// https://medium.com/@sumn2u/string-similarity-comparision-in-js-with-examples-4bae35f13968

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found); // expected output: Array ["T", "I"]

var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
console.log(res); // expected output: Array ["T", "I"]