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

console.log(uniqueValue([1, 1, 2, 3, 3, 4, 5, 5, 5, 6]));

/*
i
[1,1,2,3,3,4,5,5,5,6]
    j

   i
[1,2,2,3,3,4,5,5,5,6]
     j
*/