// sorted array
// so the same num will be connected each other with extra space
// use same array, save space

//use i as the counter

const findUniqueValue = function (arr) {
    if (arr.length < 2) return arr;
    let countPosition = 0
    let current = 0;

    while (current < arr.length) {
        if (arr[current] !== arr[countPosition]) {
            countPosition++;
            arr[countPosition] = arr[current];
        }
        current++;

    }
    return arr.slice(0, countPosition + 1);
}

console.log(findUniqueValue([1, 1, 1, 1, 5, 5]));
console.log(findUniqueValue([1, 1, 2, 3, 3, 4, 5, 5, 5, 6]));
console.log(findUniqueValue([1, 2, 3, 4, 5, 6]));

const findUniqueValue = (arr) => {
    arr.length < 2 ? arr.length : (new Set(arr)).size;
}

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

const uniqueValue = function (arr) {
    return arr.length < 2 ? arr.length : (new Set(arr)).size;
}

const uniqueValue = function (arr) {
    if (arr.length < 2) return arr.length;
    return (new Set(arr)).size;
}



console.log(uniqueValue([1, 1, 1, 1, 5, 5]));
console.log(uniqueValue([1, 1, 2, 3, 3, 4, 5, 5, 5, 6]));
console.log(uniqueValue([1, 2, 3, 4, 5, 6]));