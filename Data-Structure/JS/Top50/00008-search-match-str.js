// ("lorie loled", "lol")
const searchMathStr = function (long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log('i=',i,'j=',j,'short[j]=', short[j],'long[i + j]=',long[i + j])
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;// find one math increase
        }
    }
    return count;
}
console.log("lorie loled", "lol")