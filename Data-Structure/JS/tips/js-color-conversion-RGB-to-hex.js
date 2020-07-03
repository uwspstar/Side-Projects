//https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators/
/*
(binary) => 11111111 00100011 00010100

(red) => 11111111 => ff => 255
(green) => 00100011 => 23 => 35
(blue) => 00010100 => 14 => 20

(hex) => ff2314
*/

function rgbToHex([red = 0, green = 0, blue = 0] = []) {
    return `#${(red << 16 | green << 8 | blue).toString(16)}`;
}