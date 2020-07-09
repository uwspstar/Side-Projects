// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

const map = new Map([['foo', 'bar'], ['baz', 42]]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }


const arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }


const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
    Object.entries(object1)
        .map(([key, val]) => [key, val * 2])
);

console.log(object2); // { a: 2, b: 4, c: 6 }