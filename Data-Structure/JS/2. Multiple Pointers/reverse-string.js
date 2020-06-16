const reverseStr = function (str) {
    // O(n)
    if (str.length < 2) return str;
    let arr = str.split('');
    let i = 0;
    let j = arr.length;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr.join('')
}

console.log(reverseStr("abcde"))
console.log(reverseStr("abcdef"))