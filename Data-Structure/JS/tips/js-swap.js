// swap :  arr is working, not str , but you can loop str
// [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]] -- working
// [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]] -- not working 


function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
