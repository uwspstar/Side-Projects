// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
/*

let FLAG_A = 1; // 0001
let FLAG_B = 2; // 0010
let FLAG_C = 4; // 0100
let FLAG_D = 8; // 1000


let mask = FLAG_A | FLAG_B | FLAG_D; // 0001 | 0010 | 1000 => 1011

*/

/*
Bitwise NOT (~)
console.log(~170); // -171

JavaScript bitwise operators convert their operands to 32-bit signed integers in two’s complement format. Hence, when the ~ operator is used on an integer, the resulting value is the two’s complement of the integer. The two’s complement of an integer A is given by -(A + 1).

~170 => -(170 + 1) => -171

~ 0 => -1
~ -1 => 0
~ 2147483647 => -2147483648
~ -2147483648 => 2147483647
*/