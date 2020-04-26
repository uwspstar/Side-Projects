// str is ASCII code 
// asking is ASCII code or UniqueCode
// charCodeAt(); cheak ASCII code in js,  
// "ABC".charCodeAt(0)
// use Set to save uniqu value
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set


const isUnique = function (str) {
    if (str.length > 128) return false;
    let mySet = new Set();
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
