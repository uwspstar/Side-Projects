// str is ASCII code 
// asking is ASCII code or UniqueCode
// charCodeAt(); check ASCII code in js,  
// "ABC".charCodeAt(0)
// use Set to save uniqu value
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://erg.abdn.ac.uk/users/gorry/eg2069/ascii.html#:~:text=ASCII%20is%20a%207%2Dbit%20code%2C%20representing%20128%20different%20characters.

// ASCII is a 7-bit code, representing 128 different characters. 

const isUnique = function (str) {
    if (str.length > 128) return false;
    if (str.length === 1) return true;
    return str.length === (new Set(str.split(''))).size;
}

const isUniqueWithSetFunction = function (str) {
    // Use Set to remove duplicate elements from the array 
    if (str.length > 128) return false;
    let arr = str.split('');
    let myUniqueArr = [...new Set(arr)];
    return arr.length === myUniqueArr.length;
}



const isUnique1 = function (str) {
    if (str.length === 1) return true
    let arr = str.split('');
    let set = new Set(arr);
    console.log('arr = ', arr, 'set = ', set)
    return arr.length === set.size;
}

console.log(isUnique("Aras"));
console.log(isUnique("Arrays"));
console.log(isUnique("Arrays and Strings xingwang"));


console.log(isUniqueWithSetFunction("Aras"));
console.log(isUniqueWithSetFunction("Arrays"));
console.log(isUniqueWithSetFunction("Arrays and Strings xingwang"));

const isUnique = function (str) {
    if (str.length > 128) return false;
    let mySet = new Set();
    // O(N)
    for (let i = 0; i < str.length; i++) {
        if (mySet.has(str[i])) {
            return false;
        }
        else {
            mySet.add(str[i]);
        }
    }
    console.log(mySet);
    return true;
}
console.log(isUnique("Aras"));
console.log(isUnique("Arrays"));
console.log(isUnique("Arrays and Strings xingwang"));
