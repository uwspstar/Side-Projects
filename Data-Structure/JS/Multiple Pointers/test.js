// sorted array
// so the same num will be connected each other

const uniqueValue = function (arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(uniqueValue([1, 1, 1, 1, 5, 5]));
console.log(uniqueValue([1, 1, 2, 3, 3, 4, 5, 5, 5, 6]));
console.log(uniqueValue([1, 2, 3, 4, 5, 6]));