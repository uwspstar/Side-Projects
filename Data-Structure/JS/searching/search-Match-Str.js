// two pointer
// O(N^2)
// ("lorie loled", "lol")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
/*
In JavaScript, regular expressions are often used with the two string methods: search() and replace().

The search() method uses an expression to search for a match, and returns the position of the match.

The replace() method returns a modified string where the pattern is replaced.
*/

const searchMatchStr = function (str, word) {
    if (str.length < word.length) return -1;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (word[j] !== str[i + j]) break;
            if (j === word.length - 1) count++;
        }
    }
    return count;
}
console.log(searchMatchStr("lorie loled", "ll"));
console.log(searchMatchStr("lorie loled", "l"));
console.log(searchMatchStr("lorie loled", "lo"));
console.log(searchMatchStr("lorie loled", "lol"));

/*
var re = new RegExp(yyy, 'g');
xxx.match(re);
*/
let str = "lorie loled";
let word = "lo";
let len = str.length;
var re = new RegExp(word, 'g')
str.match(re);
str.search(word);
str.replace(word, '').length;


let str = "The rain in SPAIN stays mainly in the plain";
let wd = "ain";
var res = new RegExp(wd, 'g')
console.table(str.match(res)); // expected output: Array ["T", "I"]


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