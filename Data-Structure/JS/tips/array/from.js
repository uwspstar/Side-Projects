/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

Array.from() lets you create Arrays from:

array-like objects (objects with a length property and indexed elements); or
iterable objects (objects such as Map and Set).

The length property of the from() method is 1.

Array.from(arrayLike [, mapFn [, thisArg]])

Array.from('foo'); // [ "f", "o", "o" ]

const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set); // [ "foo", "bar", "baz" ]

const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map); // [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values()); // ['a', 'b'];

Array.from(mapper.keys()); // ['1', '2'];

function f() {
  return Array.from(arguments);
}

f(1, 2, 3); / [ 1, 2, 3 ];

// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x); // [2, 4, 6]


// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]

*/