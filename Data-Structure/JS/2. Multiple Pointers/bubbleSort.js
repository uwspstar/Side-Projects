// there are two loops
// for left and right
// each loop, start with 0, and move the end with the biggest
/*
[5, 4, 3, 2] --step 0
[4, 3, 2, 5] --step 1 , sort 3, 2, 4, 5
[3, 2, 4, 5] --step 2 , only sort 3, 2, 4
[2, 3, 4, 5] --step 3 , only sort 3, 2
*/

const bubbleSort = function (arr) {

    if (arr.length < 2) return arr;

    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };

    // use two point, from left and right 
    for (let i = arr.length - 1; i >= 0; i--) {
        let isSwap = false;
        for (let j = 0; j <= i; j++) { // every loop find on on right;
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwap = true;
            }
        }
        if (!isSwap) break;
    }

    return arr;
}

console.log(bubbleSort([0, 1, 5, 4, 3, 2, 6]));