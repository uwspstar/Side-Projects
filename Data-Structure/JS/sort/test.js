/*
do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1

    if leftElement > rightElement

      swap(leftElement, rightElement)

      swapped = true

while swapped
*/

const bubbleSort2 = function (arr) {
    let swap = true
    do {
        swap = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swap = true
            }
        }
    }
    while (swap)
    return arr
}
// [5, 3, 2, 6, 9, 1]
const bubbleSort1 = function (arr) {
    let len = arr.length
    if (len < 2) return arr

    for (let i = 0; i < len - 1; i++) {
        let swap = false
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swap = true;
            }
        }
        if (!swap) break
    } 
    return arr
}

const bubbleSort = function (arr) {
    let len = arr.length
    if (len < 2) return arr
    for (let i = arr.length -1; i >= 0; i++) {
        let swap = false
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swap = true
            }
        }
        if (!swap) break
    }
    return arr
}
console.log(bubbleSort([5, 4, 3, 2, 1])) //[2,3,5,6,9]
console.log(bubbleSort([5, 3, 2, 6, 9])) //[2,3,5,6,9]



