/*
reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/

function reverse(str) {
    if (str.length === 1) return str;
    return reverse(str.substring(1, str.length)) + str[0];
}

console.log(reverse("hello world"));