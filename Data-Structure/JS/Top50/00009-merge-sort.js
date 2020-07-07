function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    // return result.push([...left], [...right]);
    return result.concat(left, right);
}

function mergeSort(arr) {
    if (arr.length < 2) return arr
    var middle = arr.length >> 1 //Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, middle))
    var right = mergeSort(arr.slice(middle))
    return merge(left, right)
}