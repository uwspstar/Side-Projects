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

### 2020-11-13

```js
let arr = [1, 1, 2, 3, 3, 4];
let result = arr.reduce(function (prev, cur) {
  prev.indexOf(cur) == -1 && prev.push(cur);
  return prev;
}, []);
console.log(arr, result); // [ 1, 2, 3, 4 ]
```

---

- `for...in` (in ->Index), but has problem to loop array. Array.prototype will show in loop

```js
let arr = [1, 2, 3];
Array.prototype.foo = function () {
  console.log('foo');
};
for (let index in arr) {
  console.log('index', index);
}
//index 0
//index 1
//index 2
//index foo
```

---

![75% bg brightness:0.9](es6.png)

---

### ES6 iterator (2020-11-14)

- `find` : return first find elem
- `findIndex` : return first find elem index

- `for of`
  - `values()`
  - `keys()`
  - `entries`

---

```js
let arr = [1, 2, 3];
Array.prototype.foo = function () {
  console.log('foo');
};
for (let index in arr) {
  console.log('index', index);
}
for (let item of arr.values()) {
  console.log('item', item);
}
for (let item of arr.keys()) {
  console.log('item', item);
}
for (let [index, item] of arr.entries()) {
  console.log('index', index, 'item', item);
}
```

---

### 数组的扩展 (2020 - 10 - 14)

- similar Array, iterator, such as `DOM`, has length, Can NOT use push(), etc.
- check is Array : `instanceof Array`
- `covert similar Array to Array` : `let arr = Array.prototype.slice.call(divs3)`
- `Array.from` : covert similar Array to Array
- `Array.of` : build new Array
- `copyWithin()` : replace
- `fill()`
- `includes()` : return true, and false. ES5 `indexOf` Can NOT check `NaN`

---

- check is Array : `instanceof Array`

```js
let divs = document.getElementsByTagName('div');
console.log(divs); // HTMLCollection []

let divs2 = document.querySelectorAll('.myClass');
console.log(divs2); // NodeList []
console.log(divs2 instanceof Array);
```

---

- `Array.from`

```js
let divs = document.getElementsByTagName('div');
console.log(Array.from(divs)); //  []
```

---

- `Array.of`

```js
let arr = Array.of(1, 3);
console.log(arr); // [1, 3]
```

```js
let arr = Array.of(1, true, 'xing', [1, 2, 3], { age: 10 });
console.log(arr); // [ 1, true, 'xing', [ 1, 2, 3 ], { age: 10 } ]
```

---

- copyWithin()

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(1, 3)); //[1, 4, 5, 4, 5]
```

---

- fill()

```js
let arr = new Array(3).fill(7);
console.log(arr); // [7, 7, 7]
```

```js
let arr = [1, 2, 3, 4, 5];
arr.fill('Xing', 1, 3); // start 1, end 3 not include 3
console.log(arr); // [1, 'Xing', 'Xing', 4, 5]
```

---

- `includes()` : ES5 `indexOf` Can NOT check `NaN`

```js
let arr = [1, 2, 3, NaN];
console.log(arr.indexOf(NaN)); // -1
console.log(NaN == NaN); // false
console.log(arr.include(NaN)); // true
```

---

### 函数的参数 (2020-10-13, 14)

```js
function ajax(url, { body = '', method = 'GET', headers = {} } = {}) {
  console.log(method);
}
ajax('http://google.com', {
  method: 'POST',
});
```

---

- `length` : Number of `NO default value` variable

```js
function foo(x = 1, y = 2) {
  console.log(x, y);
}
console.log(foo.length);
```

---

### 函数的参数 (2020-10-15)

```js
let x = 1;
function foo(x, y = x) {
  console.log(y); //2
}
foo(2);
```

```js
let x = 1;
function foo(y = x) {
  let x = 2;
  console.log(y); //1
}
foo();
```

---

```js
function foo(y = x) {
  let x = 2;
  console.log(y); // ReferenceError : X is not defined
}
foo();
```

```js
console.log(new Function().name); //anonymous
```

```js
function foo() {
  console.log(this); // { name: 'xing' }
}
foo.bind({ name: 'xing' })();
```

---

```js
function foo(x, y) {
  console.log(this, x, y); // { name: 'xing' } 1 2
}
foo.bind({ name: 'xing' })(1, 2);
```

```js
function foo(x, y) {
  console.log(this, x, y); // { name: 'xing' } 1 2
}
foo.bind({ name: 'xing' }, 1, 2)();
```

```js
console.log(function () {}.bind({}).name); // bound
```

---

### 扩展运算符与 rest 参数 (2020-10-15, 16)

- `...` : split
- `rest` : combine

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(...arr1); // 1 2 3
console.log(arr1.push(...arr2)); // [1, 2, 3, 4, 5]
Array.prototype.push.apply(arr1, arr2);
```

```js
let str = 'xing';
var arr = [...str];
console.log(...arr); // x i n g
```

---

- `rest`

```js
function foo(x, y, z) {
  console.log(arguments);
  let sum = 0;
  Array.prototype.forEach.call(arguments, function (item) {
    sum += item;
  });
  return sum;
}
foo(1, 2);
foo(1, 2, 3);
```

---

```js
let sum = 0;
Array.from(arguments).forEach(function (item) {
  sum += item;
});
return sum;
```

```js
function foo(..args) {
  console.log(arg) // 1 2 3
  let sum = 0;
  args.forEach(function(item){
    sum += item
  })
  return sum;
}
foo(1, 2, 3)
```

---

```js
function foo(x, ...args) {
  console.log(x); // 1
  console.log(arg); // 2 3 4
}
foo(1, 2, 3, 4);
```

```js
let [x, ...y] = [1, 2, 3];
console.log(x); // 1
console.log(y); // [2, 3]
```

---

### Arrow function (2020-11-16)

- `const swap = (arr,i,j) => [arr[i], arr[j] = [arr[j], arr[i]]`
- `let b = a => a * a;`
- `let x = x => x;`

```js
let sum = (x, y) => x + y;
let b = (a) => a * a;
console.log(sum(3, 4));
```

---

```js
let oBtn = document.querySelector('#btn');
oBtn.addEventListener('click', function () {
  console.log(this); // oBtn
  //window.setTimeout(fn(),timer)
  setTimeout(function () {
    console.log(this); // window
  }, 1000);
});
```

---

- `call` , `apply` run immediately
- `bind` runs after timer

```js
let oBtn = document.querySelector('#btn');
oBtn.addEventListener('click', function () {
  // call apply bind
  setTimeout(
    function () {
      console.log(this); // oBtn
    }.bind(this),
    1000
  );
});
```

---

- `this` pointing to the obj when it is declared, `NOT` the running obj
- `arrow function` does not have `this`, need looking outside

```js
let oBtn = document.querySelector('#btn');
oBtn.addEventListener('click', function () {
  // call apply bind
  setTimeout(
    () => console.log(this); // oBtn
     ,1000
  );
});
```

---

- `arrow function` cannot create `New` function : error `not a constructor`
- `arrow function` cannot use `arguments` : error `not defined`
- `arrow function` can use `...` rest

```js
let foo = (...args) => console.log(args); // 1 2 3
foo(1, 2, 3);
```

---

### 对象的扩展 (2020-11-17)

- `Object.is()`
- `Object.assign()`
- `in`
- `object iteration`

---

```js
let name = 'xing';
let s = 'school';
let obj = {
  name,
  [s]: 'home',
  studyEs6() {
    console.log('studyEs6', this.name);
  },
  studyEs5: function () {
    console.log('studyEs5', this.name);
  },
  studyArrow: () => {
    console.log('studyArrow', this.name); // undefined : no this inside arrow function
  },
};
obj.studyArrow(); // undefined
console.log(obj.studyArrow);
```

---

- `Object.is()`

```js
console.log(Object.is(2, '2')); //false
console.log(NaN == NaN); //false
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(+0, -0)); //false
console.log(Object.is({}, {})); //false
```

- `Object.assign()`

```js
let x = {
  a: 3,
  b: 4,
};
let y = {};
Object.assign(y, x);
console.log(y); // {a: 3, b: 4}
```

---

- `in` : check obj has property , `in` check `Index`

```js
let arr [1, 2, 3]
console.log(2 in arr) // true [2] has value 3
console.log(3 in arr) // false [3] not exist
```

---

- `object iteration`

```js
for (let key in obj) {
  console.log(key, obj[key]);
}

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});

Object.getOwnPropertyNames(obj).forEach((key) => {
  console.log(key, obj[key]);
});

Reflect.ownKeys(obj).forEach((key) => {
  console.log('Reflect.ownKeys', key, obj[key]);
});
```

---

### 深拷贝与浅拷贝 (2020-11-18, 21)

- `Object.assign()` : shallow copy
- The `Object.assign()` method only `copies enumerable` and `own properties` from a `source object` to a `target object`.
- For `copying property` definitions (including their `enumerability`) into `prototypes`, use `Object.getOwnPropertyDescriptor()` and `Object.defineProperty()` instead.

---

- https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
- `Object.assign`: only pass address
- `deep copy` : two value does not affect each other
- `shallow copy`: one value change, the other value change also.

```js
let target = { a: '1', e: 'e' };
let source = { a: '100', b: '2' };

Object.assign(target, source);
console.log('target', target); //target { a: '100', b: '2' } //no e:
```

---

- using `JSON.stringify()` and `JSON.parse()` to do a `deep copy`
- JSON : same as a string with standard formate `{}`
- `JSON key` needs double quote. `Object key` does not need double quote
- `JSON.stringify()` : obj -> string
- `JSON.parse()` -> string -> obj

---

- `typeof` may not always correct, such as `[]`

```js
let checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1);
};
console.log('{} type', checkType({}));
console.log('[] type', checkType([]));
```

---

```js
let deepCopy = (target) => {
  let targetType = checkType(target);
  let result;
  if (targetType === 'Object') {
    result = {};
  } else if (targetType === 'Array') {
    result = [];
  } else {
    return target;
  }
  for (let i in target) {
    let value = target[i];
    let valueType = checkType(value);
    if (valueType === 'Object' || valueType === 'Array') {
      result[i] = deepClone(value);
    } else {
      result[i] = value;
    }
  }
  return result;
};
```

---

### object oriented design (2020-10-25)

- class
- object

### symbol

- symbol
