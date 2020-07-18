// ("lorie loled", "lol")

const searchMathStr = function (str, word) {
    let reg = new RegExp(word, 'g');
    return str.match(reg) !== null;
}
console.log(searchMathStr("lorie loled", "lol"));
console.log(searchMathStr("lorie loled", "lols"));


const searchMathStr2 = function (long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log('i=', i, 'j=', j, 'short[j]=', short[j], 'long[i + j]=', long[i + j])
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;// find one math increase
        }
    }
    return count;
}
