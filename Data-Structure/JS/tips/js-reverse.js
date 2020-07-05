function reverseStr(str) {
    return str.split('').reverse().join('') // not join() return arr, not string
    // only arr has reverse function

}
console.log(reverseStr(awesome))

//(str) => {str.split('').reverse().join('')}

const reverseStr = function (str) {
    let mid = str.length >> 1
    let arr = str.split('')
    for (let i = 0; i < mid; i++) {
        swap(arr, arr[i], arr[str.length - 1 - i])
    }
    return arr.join('')
}

function swap(arr, i, j) {
    return [arr[i], arr[j]] = [arr[j], arr[i]]
}