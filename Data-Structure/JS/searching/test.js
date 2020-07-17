
// ordered array
const binarySearchRecursive = function (arr, num, start = 0, end = arr.length - 1) {
    if (arr.length === 0) return -1;
    if (start <= end) {
        let mid = (start + end) >> 1; 
        if (arr[mid] === num) return 1;
        arr[mid] < num ? binarySearchRecursive(arr, num, mid + 1, end)
            : binarySearchRecursive(arr, num, start, mid - 1);
    } 
    return -1;
}
console.log(binarySearchRecursive([1, 2, 4, 5], 2));
console.log(binarySearchRecursive([1, 2, 4, 5], 0));
console.log(binarySearchRecursive([1, 2, 3, 4, 5], 3));
/*
console.log(5 >> 1) // 5 / 2 ** 1
console.log(Math.floor(5 / 2)) // 5 / 2 ** 1
console.log(4 / 2) // 5 / 2 ** 1

const searchMatchStr = function (str, word) {
    if (str.length < word.length) return -1;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (word[j] !== str[i + j]) break;
            if (j === word.length - 1) count++;
        }
    }
    return count;
}
console.log(searchMatchStr("lorie loled", "ll"));
console.log(searchMatchStr("lorie loled", "l"));
console.log(searchMatchStr("lorie loled", "lo"));
console.log(searchMatchStr("lorie loled", "lol"));

const findMissingNum = function (arr) {
    if (arr.length === 0) return -1;
    //1+2+3+...+n = n/2 * (1+n)
    let n = arr.length + 1;
    let sum = n * (1 + n) >> 1 // middle
    //console.log('n=', n, 'sum=', sum)
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    //console.log('n=', n, 'sum=', sum, 'total=', total)
    return sum - total;
}
console.log(findMissingNum([1, 2, 4, 5]))
console.log(findMissingNum([1, 2, 3, 4, 6, 7, 8]))

// ("lorie loled", "lol")
const searchMathStr = function (long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log('i=', i, 'j=', j, 'short[j]=', short[j], 'long[i + j]=', long[i + j])
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;// find one math increase
            console.log('count =', count)
        }
    }
    return count;
}
console.log(searchMathStr("lorie loled", "lol")) // 1
console.log(searchMathStr("lorie loled", "ri")) // 1
console.log(searchMathStr("lorie loled", "l")) // 3



function binarySearch(arr, num) {
    let start = 0
    let end = arr.length - 1
    let mid = (start + end) >> 1
    while (start <= end) {
        if (arr[mid] === num) return mid
        arr[mid] > num ? mid = end-- : mid = start++
        mid = (start + end) >> 1
    }
    return arr[mid] === num ? mid : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13))
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103))

*/