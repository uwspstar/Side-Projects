const sortColor = function (arr) {
    if (arr.length < 2) return arr;
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i+=) {
        if (arr[i] === 0) {
            arr0.push(arr[i])
        } else if (arr[i] === 1) {
            arr1.push(arr[i])
        } if (arr[i] === 2) {
            arr2.push(arr[i])
        }
    }
    return [].concat(arr0, arr1, arr2);
}
let arr = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]
console.log(sortColor(arr));