
// Set has NO duplicate

// Use to remove duplicate elements from the array 

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]


// O(N)

const removeDuplication = function (arr) {
    if (arr.length < 2) return arr
    let mySet = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (!mySet.has(arr[i])) mySet.add(arr[i])
    }
    return [...mySet]
}
console.log([...new Set(['a', 'b', 'c', 'a', 'e', 'c'])])
console.log(removeDuplication(['a', 'b', 'c', 'a', 'e', 'c']))