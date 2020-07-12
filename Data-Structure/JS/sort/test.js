//step 1 : find max length of num
const getLength = function (num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
const getMaxLength = function (arr) {
    if (arr.length === 1) return arr[0].toString().length;
    let maxLength = 1;
    for (let i = 0; i < arr.length; i++) {
        let len = getLength(arr[i]) //arr[i].toString().length;
        maxLength = Math.max(len, maxLength)
    }
    return maxLength;
}
const radixSort = function (arr) {
    if (arr.length < 2) return arr;
    let maxLength = getMaxLength(arr);
    for (let i = 0; i < maxLength; i++) {

    }

}

console.log(getMaxLength([15, 334, 222, 629, 29, 100, 5098, 50987]));

// console.log(radixSort([15, 334, 222, 629, 29, 100, 5098, 50987])) //[0, 1, 2, 3, 5, 6, 9]
