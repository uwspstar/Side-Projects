const sortColor = function (arr) {
    if (arr.length < 2) return arr;
    let start = 0;
    let end = arr.length - 1;
    let i = 0
    while (start < end) {
        if(arr[start] === 0) {
            start++
        } else if (arr[start] === 1) {
            if (arr[end] === 2) {
                end--;
            }
        }
    }

}
let arr = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]
console.log(sortColor(arr));