// check arr, or str length
// for js, we may need to check type, using typeof
// check undefined

// check str same as array in js
const checkInput = function (str) {
    // check with interviewer
    if (str === undefined || typeof (str) !== 'string') return false;
    if (str.length < 2) return str;
}