//One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
/*
EXAMPLE
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bae -> false
*/

//O(n)
const oneAway = function (str1, str2) {

    let len1 = str1.length;
    let len2 = str2.length;


    if (Math.abs(len1 - len2) > 2) return false;
    let count = 0;

    if (len1 == len2) {
        for (let i = 0; i < len1; i++) {
            if (count > 2) return false;
            if (str1[i] != str2[i]) {
                count++;
                console.log('eq: ', 'i=', i, 'str1', str1, 'str2', str2);
            }
        }
    }
    else if (len1 > len2) {
        console.log('-a: ', 'str1', str1, 'str2', str2);
        for (let i = 0; i < len1; i++) {
            if (count > 2) return false;
            if (str1[i] != str2[i]) {
                count++;
                str2 = str2.substr(0, i) + str1[i] + str2.substr(i);
                console.log('a: ', 'i=', i, 'str1', str1, 'str2', str2);
            }
        }
    }
    else {

        for (let i = 0; i < len2; i++) {
            console.log('-b: ', 'str1', str1, 'str2', str2);
            if (count > 2) return false;
            if (str1[i] != str2[2]) {
                count++;
                str1 = str1.substr(0, i) + str2[i] + str1.substr(i);
                console.log('b: ', 'i=', i, 'str1', str1, 'str2', str2);
            }
        }
    }

    return true;

}

console.log(oneAway('pale', 'ple')) //true
console.log(oneAway('pales', 'pale')) //true
console.log(oneAway('pale', 'bale')) //true 
console.log(oneAway('pale', 'bae')) //false