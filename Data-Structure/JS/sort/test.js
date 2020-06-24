/*
do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1

    if leftElement > rightElement

      swap(leftElement, rightElement)

      swapped = true

while swapped
*/

const bubbleSort = function (arr) {
    let swap = true
    let i = 0
    do {
        swap = false
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1] > arr[i]]
            i++
            swap = true
        }
    }
    while (swap && i < arr.length - 1) 
}

console.log(bubbleSort([5,3,2,6,9])) //[2,3,5,6,9]

