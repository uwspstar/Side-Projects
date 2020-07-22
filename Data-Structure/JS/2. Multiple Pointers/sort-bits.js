// sortBits([1, 0, 0, 1, 1, 0]) //outputs: [0, 0, 0, 1, 1, 1]
// 1 : two pointers
// check sort 3 color [0,1,2]
// check insertionSort and QuickSort

const sortBits = function (arr) {
    if (arr.length < 2) return arr;

    let left = 0;
    let right = arr.length - 1;

    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    while (left < right) {
        if (arr[left] === 0) {
            left++;
        } else {
            if (arr[right] === 1) {
                right--;
            } else {
                swap(arr, left, right);
                left++;
                right--;
            }
        }
    }
    return arr;
}


const sortBits = function (arr) {
    if (arr.length < 2) return arr;

    let fast = 0; // loop all items
    let slow = 0;

    while (fast < arr.length) {
        if (arr[fast] === 0) {
            [arr[fast], arr[slow]] = [1, 0]
            slow++;
        }
        fast++;
    }
    return arr;
}

//brut force
// O(N)
const sortBits = function (arr) {

    if (arr.length < 2) return arr;
    // space O(n + n)
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

/*
[ 1, 0, 0, 1, 1, 0 ] fast= 0 slow= 0
[ 1, 0, 0, 1, 1, 0 ] fast= 1 slow= 0
[ 0, 1, 0, 1, 1, 0 ] fast= 2 slow= 1
[ 0, 0, 1, 1, 1, 0 ] fast= 3 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 4 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 5 slow= 2
[ 0, 0, 0, 1, 1, 1 ]
*/
