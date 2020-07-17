const areThereDuplicates = function (arr) {
    if (arr.length < 2) return false;
    return arr.length !== (new Set(arr)).size;
}