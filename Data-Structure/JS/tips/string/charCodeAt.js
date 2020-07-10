//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// str.charCodeAt(index)
//'ABC'.charCodeAt(0)  // returns 65

//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index

//The codePointAt() method returns a non-negative integer that is the Unicode code point value.

const icons = '☃★♲';

console.log(icons.codePointAt(1));
// expected output: "9733"