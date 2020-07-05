// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj); // expected output: Object { foo: "bar", baz: 42 }

let obj = [...map.entries()].reduce((obj, [key, value]) => (obj[key] = value, obj), {});