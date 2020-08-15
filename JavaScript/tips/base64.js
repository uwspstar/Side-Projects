// JavaScript 原生提供两个 Base64 相关的方法。
// btoa()：任意值转为 Base64 编码
// atob()：Base64 编码转为原来的值
// 这两个方法不适合非 ASCII 码的字符，会报错
// btoa('你好') // 报错
// https://stackoverflow.com/questions/23097928/node-js-throws-btoa-is-not-defined-error
/*
The 'btoa-atob' module does not export a programmatic interface, it only provides command line utilities.

If you need to convert to Base64 you could do so using Buffer:

console.log(Buffer.from('Hello World!').toString('base64'));
Reverse (assuming the content you're decoding is a utf8 string):

console.log(Buffer.from(b64Encoded, 'base64').toString());
*/
var string = 'Hello World!';
console.log('btoa(string)', btoa(string)) // "SGVsbG8gV29ybGQh"
console.log("atob('SGVsbG8gV29ybGQh')", atob('SGVsbG8gV29ybGQh')) // "Hello World!"

function b64Encode(str) {
    return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
    return decodeURIComponent(atob(str));
}

console.log(b64Encode('你好')) // "JUU0JUJEJUEwJUU1JUE1JUJE"
console.log(b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE')) // "你好"