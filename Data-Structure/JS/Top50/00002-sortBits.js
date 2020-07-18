// sortBits([1, 0, 0, 1, 1, 0]) //outputs: [0, 0, 0, 1, 1, 1]
// 1 : two pointers
const sortBits = function (arr) {
    if (arr.length < 2) return arr;
    let fast = 0;
    let slow = 0;
    while (fast < arr.length) {
         // console.log(arr, 'fast=', fast, 'slow=', slow)
        if (arr[fast] === 0) {
            [arr[fast], arr[slow]] = [1, 0]
            slow++
        }
        fast++
    }
    return arr
}
/*
[ 1, 0, 0, 1, 1, 0 ] fast= 0 slow= 0
[ 1, 0, 0, 1, 1, 0 ] fast= 1 slow= 0
[ 0, 1, 0, 1, 1, 0 ] fast= 2 slow= 1
[ 0, 0, 1, 1, 1, 0 ] fast= 3 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 4 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 5 slow= 2
[ 0, 0, 0, 1, 1, 1 ]
*/

// 2 : 
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

console.log(sortBits([1, 0, 0, 1, 1, 0])) //

//[1, 0, 0, 1, 1, 0]
// [0]