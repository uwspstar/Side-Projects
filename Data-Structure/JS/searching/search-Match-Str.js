// two pointer
// O(N^2)
// ("lorie loled", "lol")
const searchMathStr = function (long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++; //find one math increase
        }
    }
    return count;
}

function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break; //restart again
            if (j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")