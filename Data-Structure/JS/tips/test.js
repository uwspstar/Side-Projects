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

console.log(reverseStr("abcd"))

/*
console.log([4, 2, 5, 1, 3].sort((a,b)=> a - b))


// (A >> B) => Math.floor(A / (2 ** B)) => Math.floor(A / Math.pow(2, B))

// (170 >> 3) => Math.floor(170 / (2 ** 3)) => Math.floor(170 / 8) => 21
// (-170 >> 3) => Math.floor(-170 / (2 ** 3)) => Math.floor(-170 / 8) => -22

console.log(12 >> 1) // 6
console.log(5 >> 1) // 2
console.log(3 >> 1) // 1
console.log(2 >> 1) // 1
*/