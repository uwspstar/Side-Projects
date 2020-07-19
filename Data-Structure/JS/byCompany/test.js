const sortColor = function (arr) {
    if (arr.length < 2) return arr;
    let p0 = 0;
    let current = 0;
    let p2 = arr.length - 1;
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    while (current <= p2) {
        let item = arr[current];
        if (item === 0) {
            swap(arr, p0, current);
            p0++;
            current++;
        } else if (item === 2) {
            swap(arr, p2, current);
            p2--;
        } else current++;

    }
    return arr;
}
let arr = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]
console.log(sortColor(arr));