---
marp: true
theme: default
header: '从ES6到ES11JS全版本JavaScript语法详解'
footer: 'study note by Xing, source https://www.youtube.com/watch?v=uTYkUfniMeo&list=PL9nxfq1tlKKn96qqvz92I-09Qg21F12c2'
paginate: true
size: 16:9
---

# 从 ES6 到 ES11JS 全版本 JavaScript 语法详解

- https://www.youtube.com/watch?v=uTYkUfniMeo&list=PL9nxfq1tlKKn96qqvz92I-09Qg21F12c2

---

### let (2020-10-10)

- not windows object
- does not allow declare again after a variable has been declared

```js
// error, b is undefined
function foo(a = b, b = 2) {
  console.log(a, b);
}
```

---

- ES5

```js
for (var i = 0; i < 3; i++) {
  console.log('inside', i);
}
console.log('outside', i);
//inside 0
//inside 1
//inside 2
//outside 3
```

```js
if (false) {
  var a = 5;
}
console.log(a);
// undefined
```

---

- ES6

```js
for (let i = 0; i < 3; i++) {
  console.log('inside', i);
}
console.log('outside', i);
//0
//1
//2
//ReferenceError: i is not defined
```

```js
if (false) {
  let a = 5;
}
console.log(a);
// error
```

---

- event loop

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  });
}
//3
//3
//3
```

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  });
}
//0
//1
//2
```

---

```js
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    });
  })(i);
}
//0
//1
//2
```

---

### const

- cannot change
- ES5

```js
Object.defineProperty(window, 'PI', {
  value: 3.14,
  writable: false,
});
```

- ES6

```js
const a = 5;
```

```js
const b
b = 5
//error
```

---

```js
const obj = {
  name: 'xing',
  age: 20,
  skill: {
    name: 'code',
    year: 15,
  },
};
console.log(obj);
```

- `Object.freeze` : recursive to free deep object

```js
Object.freeze(obj);
Object.freeze(obj.skill);
```

---

### How the data saved in JS

- `stack`
  - primitives : value (num, str)
  - Structural : address (obj, arr, etc)
- `heap`
  - value related the obj address from stack

---

![75% bg brightness:0.9](data.png)

---

### The latest ECMAScript standard defines nine types:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

---

### Primitives

- Six Data Types that are `primitives`, checked by typeof operator:
  - undefined : typeof instance === "undefined"
  - Boolean : typeof instance === "boolean"
  - Number : typeof instance === "number"
  - String : typeof instance === "string"
  - BigInt : typeof instance === "bigint"
  - Symbol : typeof instance === "symbol"

---

### Structural

- Structural Types: everything made with new keyword
  - `Object` : typeof instance === "object". Special non-data but Structural type for any constructed object instance also used as data structures: `new Object`, `new Array`, `new Map`, `new Set`, `new WeakMap`, `new WeakSet`, `new Date` and almost `everything made with new keyword`;
  - `Function` : a non-data structure, though it also answers for typeof operator: typeof instance === "function". This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.

---

### Structural Root Primitive:

- `null` : typeof instance === "object". Special primitive type having additional usage for its value: if object is not inherited, then null is shown;

---

### 解构赋值 (2020-10-11)

```js
let [a, b, [c, d], e] = [1, 2, [3, 4]];
console.log(a, b, c, d, e);
// 1 2 3 4 undefined
```

```js
let [a, b, c, d] = 'xing';
console.log(a, b, c, d); //x i n g
```

```js
let [a, b, c = 3, d] = [1, 2];
console.log(a, b, c, d); //1 2 3 undefined
```

---

```js
let user = {
  name: 'xing',
  age: '30',
};

let { name, age } = user;

console.log(name, age); // xing 30
console.log(age, name); // 30 xing
```

---

```js
let user = {
  name: 'xing',
  //age: '30',
};

let { name, age = 18 } = user;

console.log(name, age); // xing 18
console.log(age, name); // 18 xing
```

---

- if obj has attribute

```js
let user = {
  name: 'xing',
  age: 30,
};

let { name, age = 18 } = user;

console.log(name, age); // xing 30
console.log(age, name); // 30 xing
```

---

```js
let user = {
  name: 'xing',
  age: '30',
};

let { name: myName, age: myAge } = user;

console.log(myName, myAge); // 30 xing
console.log(name, age); // ReferenceError: name is not defined
```

---

```js
function foo() {
  console.log(123);
}

let [a = foo()] = [1];
let [b = foo()] = [];

console.log(a, b); // 1 123
```

```js
function foo([a, b, c]) {
  console.log(a, b, c);
}
let arr = [1, 2, 3];
foo(arr); // 1 2 3
```

---

```js
function foo({ age, name, school = 'MIT' }) {
  console.log(name, age, school);
}
let user = {
  name: 'xing',
  age: 18,
};
foo(user); // xing 18 MIT
```

---

```js
function foo() {
  let user = {
    name: 'xing',
    age: 18,
  };
  return user;
}
let { age, name, school = 'MIT' } = foo();
console.log(name, age, school); //xing 18 MIT
```

---

- `JSON` (`JavaScript Object Notation`) is a lightweight data-interchange format, derived from JavaScript, but used by many programming languages.
- JSON builds universal data structures.

```js
// JSON data key and value are string
let data = '{"name" : "xing" , "age" : "18"}';
let { age, name } = JSON.parse(data);
console.log(name, age); //xing 18
```

---

![75% bg brightness:0.9](es5.png)

---

![75% bg brightness:0.9](es6.png)

---

### ES5 (2020-10-12)

- `for` : can use `break` and `continue`
- `foreach`: cannot use `break` and `continue`

```js
arr.forEach(function (elem, index, array) {
  console.log(elem, index);
});
```

---

- `map` : generate a new array, not change original array

```js
let arr = [1, 2, 3];
let result = arr.map(function (value) {
  value++;
  return value;
});
console.log(arr, result);
//[ 1, 2, 3 ] [ 2, 3, 4 ]
```

---

- `filter` : return a new array which item match the condition, not change original array.

```js
let arr = [1, 2, 3, 4];
let result = arr.filter(function (value) {
  return value % 2 === 0;
});
console.log(arr, result);
//[ 1, 2, 3 ] [ 2, 4 ]
```

---

- `some` : return true if any elem match the condition, otherwise return false

```js
let arr = [1, 2, 3, 4];
let result = arr.some(function (value) {
  return value % 2 === 0;
});
console.log(arr, result);
//[ 1, 2, 3 ] true
```

---

- `every` : return true if all elem match the condition, otherwise return false

```js
let arr = [1, 2, 3, 4];
let result = arr.every(function (value) {
  return value % 2 === 0;
});
console.log(arr, result);
//[ 1, 2, 3 ] false
```

---

- `reduce` :

```js
let arr = [1, 2, 3, 4];
let result = arr.reduce(function (prev, cur, index, array) {
  return prev + cur;
});
console.log(arr, result); //[ 1, 2, 3 ] 10

let max = arr.reduce(function (prev, cur) {
  return Math.max(prev, cur);
});
console.log(arr, max); // [ 1, 2, 3, 4 ] 4
```
