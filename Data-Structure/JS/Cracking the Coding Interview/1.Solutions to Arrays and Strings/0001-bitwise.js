//not working, still need to figure out how this one work.

const isUniqueBitsOpt = function (str) {
    let checker = 0;
    for (let i = 0; i < str.length; i++) {
        //console.log('charCodeAt=', str.charCodeAt(str[i]))
        let val = str.charCodeAt(str[i]) - 97; //"a"
        //console.log('val = ', val);
        //console.log('<< =', 1 << val);
        //console.log('&<< =', checker & (1 << val));
        if ((checker & (1 << val)) > 0) {
            return false;
        }
        checker |= (1 << val);
        //console.log('|=', checker |= (1 << val));
    }
    return true;
}

console.log(isUniqueBitsOpt('ab'));
console.log(isUniqueBitsOpt('Aab'));