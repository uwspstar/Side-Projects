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

function reveresStrRecursive(str) {
    if (str.length < 2) return str;
    //return reverse(str.substring(1, str.length)) + str[0];
    return reverse(str.slice(1, str.length)) + str[0];
}
console.log(reveresStrRecursive('awesome'));


function reverse(str) {
    if (str.length < 2) return str;
    let mid = str.length >>1; // parseInt(str.length / 2)
    let arr = str.split(''); // only arr can swap
    for (let i = 0; i < mid; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr.join('');
}
console.log(reverse('awesome'));

function reverseStr2(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseStr2('awesome'));

function reverseStr(str) {
    let arr = str.split('').reverse();
    // only arr has reverse function
    return arr.join('');
}
console.log(reverseStr('awesome'));

  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'