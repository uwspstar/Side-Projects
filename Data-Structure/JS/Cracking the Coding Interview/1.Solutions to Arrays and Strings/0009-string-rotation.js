/*
StringRotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").
*/
const stringRotation = function (str1, str2) {
    if (str1.length !== str1.length) return false;
    let p1 = 0;
    let p2 = 0;
    // "bwaterbottle"
    // "erbottlebwat"
    while (p1 < arr.length && p2 < arr.length) {
        if (str1[p1] !== str2[p2]) {
            p2++;
        }
        else {
            let tmp = str.slice(p2) + str.slice(0, p2);
            if (tmp = str1) return true;
            p1 = 0;
            p2++;
        }
    }
    return false;

}