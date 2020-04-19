// Power Set: finding all the subsets on a set.
//O(2^n)
/*
powerset('') // =>  ['']
powerset('a') // => ['', 'a']
powerset('ab') // => ['', 'a', 'b', 'ab']

*/

const getAllSubsets = function (str) {
    let result = ['']; // important
    for (i = 0; i <= str.length; i++) {
        let len = result.length; // important
        for (let x = 0; x < len && str[i] !== undefined; x++) {
            result.push(result[x].concat(str[i]))
        }
    }
    return result;
}

console.log(getAllSubsets('abc'));

const getPowerSet =
    theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
            subsets.map(set => [value, ...set])
        ),
        [[]]
    );

console.log(getPowerSet([1, 2, 3]));

function powerset(n = '') {
    const array = Array.from(n);
    const base = [''];

    const results = array.reduce((previous, element) => {
        const previousPlusElement = previous.map(el => {
            return `${el}${element}`;
        });
        return previous.concat(previousPlusElement);
    }, base);

    return results;
}

console.log(powerset('abc'));