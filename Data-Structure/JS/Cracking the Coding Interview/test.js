const isUnique = function (str) {
    if (str.length > 128) return false
    if (str.length === 1) return true;
    return str.length === (new Set(str.split(''))).size;
}

const isUnique1 = function (str) {
    if (str.length === 1) return true
    let arr = str.split('');
    let set = new Set(arr);
    console.log('arr = ',arr, 'set = ',set)
    return arr.length === set.size;
}

console.log(isUnique("Aras"));
console.log(isUnique("Arrays"));
console.log(isUnique("Arrays and Strings xingwang"));