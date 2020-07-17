/*
Newer versions of JavaScript -- specifically ECMAScript 6 -- have added support for binary (prefix 0b), octal (prefix 0o) and hexadecimal (prefix: 0x) numeric literals:

var bin = 0b1111;    // bin will be set to 15
var oct = 0o17;      // oct will be set to 15
var oxx = 017;       // oxx will be set to 15
var hex = 0xF;       // hex will be set to 15
// note: bB oO xX are all valid
*/

var foo = parseInt('1111', 2);    // foo will be set to 15

var num = 255;

document.writeln(num.toString(16)); // Outputs: "ff"
document.writeln(num.toString(8));  // Outputs: "377"
document.writeln(num.toString(2));  // Outputs: "11111111"