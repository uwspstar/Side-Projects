const isSubsequence = function (str1, str2) {

  if (str1.length === 0 || str2.length === 0) return false;
  if (str2.length < str1.length) return isSubsequence(str2, str1);

  let i = 0; // need to reset if any i is not match
  let j = 0; // loop all str2

  while (j < str2.length) {
    str1[i] === str2[j] ? i++ : i = 0;
    if (i === str1.length) return true; //str1.length because last i++
    j++;
  }
  return false;
}
console.log(isSubsequence('he he llo world', 'hello')) // false
console.log(isSubsequence('he hello world', 'hello')) // true
console.log(isSubsequence('hello', 'he he llo world')) // false
console.log(isSubsequence('hello', 'he hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)