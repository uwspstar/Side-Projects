/*
EASY :

StringRotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").
*/

const stringRotation = function (str1, str2) {
    if (str1.length !== str1.length) return false;
    let p2 = 0;
    // "bwaterbottle" // "erbottlebwat"
    while (p2 < str2.length) {
        if (str1[0] !== str2[p2]) {
            p2++;
        }
        else {
            let tmp = str2.slice(p2) + str2.slice(0, p2);
            console.log('tpm', tmp);
            if (tmp === str1) return true;
            p2++;
        }
    }
    return false;

}
console.table(stringRotation('bbw', 'bottl'));
console.table(stringRotation('bbwaterbottl', 'bottlebwater'));
console.table(stringRotation('bwaterbottle', 'bottlebwater'));