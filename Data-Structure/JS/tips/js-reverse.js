// reverse function can run O(N)

function reverseStr(str) {
    // only arr has reverse function
    // not join() return arr, not string
    return str.split('').reverse().join('');
}
console.log(reverseStr('awesome'));

//(str) => {str.split('').reverse().join('')}
const reverseStr = function (str) {
    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };
    let mid = str.length >> 1;
    let arr = str.split('');
    for (let i = 0; i < mid; i++) {
        // with index, not using  swap(arr, arr[i], arr[arr.length - 1 - i])
        swap(arr, i, arr.length - 1 - i);
    }
    return arr.join('');
}

const reverseStr = function (str) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    let mid = str.length >> 1;
    let arr = str.split('');
    for (let i = 0; i < mid; i++) {
        // with index, not using  swap(arr, arr[i], arr[arr.length - 1 - i])
        swap(arr, i, arr.length - 1 - i);
    }
    return arr.join('');
}

console.log(reverseStr("abcdef"));