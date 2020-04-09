/*
capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

const capitalizeFirst = function (arr) {
    let newArray = [];
    if (arr.length === 0) {
        return newArray;
    }
    newArray.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    return newArray.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["abc", "xing", "hello"]));


function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;

}