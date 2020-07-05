// reverse function can run O(N)

function reverseStr(str) {
    return str.split('').reverse().join('') // not join() return arr, not string
    // only arr has reverse function

}
console.log(reverseStr('awesome'))

//(str) => {str.split('').reverse().join('')}

const reverseStr = function (str) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    let mid = str.length >> 1
    let arr = str.split('')
    for (let i = 0; i < mid; i++) {
        swap(arr, i, arr.length - 1 - i)  // with index, not using  swap(arr, arr[i], arr[arr.length - 1 - i])
    }
    return arr.join('')
}

console.log(reverseStr("abcdef"))