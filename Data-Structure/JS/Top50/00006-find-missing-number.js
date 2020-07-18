const findMissingNumber = function (arr) {
    if (arr.length === 0) return 1;
    // n * (n+1) / 2
    let n = arr.length;
    let total = (n >> 1) * (n + 1);

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    //console.log('total = ', total, 'sum = ', sum);
    return sum - total;
}
console.log(findMissingNumber([]));
console.log(findMissingNumber([1, 2, 4]));
console.log(findMissingNumber([1, 2, 3, 4]));