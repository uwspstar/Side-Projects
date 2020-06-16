// sorted array
// so the same num will be connected each other
// with extra space

// sorted array
// so the same num will be connected each other

const uniqueValue = function (arr) {
    if (arr.length === 0) return 0
    if (arr.length < 2) return 1

    let count = 0
    let current = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (current !== arr[i]) {
            count++
            current = arr[i]
        }
    }
    return count + 1
}

console.log(uniqueValue([]))
console.log(uniqueValue([1, 1]))
console.log(uniqueValue([1, 1, 1, 1, 5, 5]))
console.log(uniqueValue([1, 1, 2, 3, 3, 4, 5, 5, 5, 6]))
console.log(uniqueValue([1, 2, 3, 4, 5, 6]))