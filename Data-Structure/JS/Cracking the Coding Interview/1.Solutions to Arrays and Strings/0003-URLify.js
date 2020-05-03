/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 
Output: "Mr%20John%20Smith"
*/

//A common approach in string manipulation problems is to edit the string starting from the end and working backwards. This is useful because we have an extra buffer at the end, which allows us to change characters without worrying about what we're overwriting.

const uRLify = function (str) {
    let result = "";
    str = str.trim();
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ')
            result = '%20' + result;
        else
            result = str[i] + result;
    }
    return result;

}
console.log(uRLify('Mr John Smith '));