// q1 : has negative number inside array ?
// using new Map() instead of using {}
// But the plain object has a limitation: its keys have to be strings (or rarely used symbols).

// https://dmitripavlutin.com/maps-vs-plain-objects-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


const same = function (arr1, arr2) {
    if (arr1.length != arr2.length) return false

    let obj1 = new Map()
    let obj2 = new Map()

    for (let i = 0; i < arr1.length; i++) {

    }
}

console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false