//brut force
const sortBits = function (arr) {

    if (arr.length < 2) return arr;
    // space O(n)
    let arr1 = [];
    let arr0 = [];
    //O(n)
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 1 ? arr1.push(1) : arr0.push(0);
    }
    return [].concat(arr0, arr1);
}
console.log(sortBits([0, 1, 0, 0, 1, 1, 0]));
console.log(sortBits([1, 0, 0, 1, 1, 0]));


const sortBits2 = function (arr) {
    if (arr.length < 2) return arr
    let start = 0
    let end = arr.length - 1

    while (start < end) {
        // console.log(arr, 'start =', start, 'end =', end)
        if (arr[start] === 0) {
            start++
        }
        else if (arr[end] === 0) { // start === 1, and end is 
            [arr[start], arr[end]] = [0, 1]
            start++
            end--
        } else {
            end--
        }
    }
    return arr
}





