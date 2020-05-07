/*
String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).
At first glance, implementing this method seems fairly straightforward, but perhaps a bit tedious. We iterate through the string, copying characters to a new string and counting the repeats. At each iteration, check if the current character is the same as the next character. If not, add its compressed version to the result.
*/
// It's slow because string concatenation operates in O(n^2 ) time (see StringBuilder on pg 8 ).

const stringCompression = function (str) {
    if (str.length < 2) return str;

    let result = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++;
        } else { 
            result = result + str[i] + count;
            count = 1;
        }
    }
    return result;

}

console.log(stringCompression('abc')) //a1blc1
console.log(stringCompression('aabcccccaaa')) //a2blc5a3