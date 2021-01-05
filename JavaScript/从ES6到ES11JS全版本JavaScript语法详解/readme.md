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
- https://wangdoc.com/es6/

---

### let (2020-10-10)

- NOT `windows` object
- does NOT allow declare again after a variable has been declared
- let 命令所在的`代码块内`有效

```js
function foo(a = b, b = 2) {
  console.log(a, b); // error, b is undefined
}
```

---

- ES5 : hoisting

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
console.log(a); // undefined
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

- `Event Loop` : https://www.youtube.com/watch?v=8aGhZQkoFbQ

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

### Concurrency model and the event loop

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
- `Runtime concepts`

  - `stack`
  - `heap` : Objects are allocated in a heap
  - `queue` : message queue
  - `event loop`

    ```js
    while (queue.waitForMessage()) {
      queue.processNextMessage();
    }
    ```

---

### How the data saved in JS

- `stack`
  - primitives : value (num, str)
  - Structural : address (obj, arr, etc)
- `heap`
  - value related the obj address from stack

---

![95% bg brightness:0.9](data.png)
![60% bg brightness:0.9](eventloop.png)

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
const b;
b = 5;
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

### The latest ECMAScript standard defines nine types:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

---

### Primitives

- Six Data Types that are `primitives`, checked by typeof operator:
  - `undefined` : typeof instance === "undefined"
  - `Boolean` : typeof instance === "boolean"
  - `Number` : typeof instance === "number"
  - `String` : typeof instance === "string"
  - `BigInt` : typeof instance === "bigint"
  - `Symbol` : typeof instance === "symbol"

---

### Structural : Object, new, Function

- `Structural Types`: everything made with `new` keyword

  - `Object` : typeof instance === "object". Special non-data but Structural type for any constructed object instance also used as data structures: `new Object`, `new Array`, `new Map`, `new Set`, `new WeakMap`, `new WeakSet`, `new Date` and almost `everything made with new keyword`;
  - `Function`: a`non-data structure`;

---

### Non-data Structure : Function

- `Function` : a `non-data structure`, though it also answers for typeof operator: typeof instance === "function". This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.

---

### Structural Root Primitive:

- `null` : typeof instance === "object". Special primitive type having additional usage for its value: if object is `NOT inherited`, then null is shown;

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

- `map` : generate a `new array`, not change original array

```js
let arr = [1, 2, 3];
let result = arr.map(function (value) {
  value++;
  return value;
});
console.log(arr, result); //[ 1, 2, 3 ] [ 2, 3, 4 ]
```

---

```js
let arr = [1, 2, 3];
let result = arr.map((x) => {
  x++;
  return x;
});
console.log(arr, result); //[ 1, 2, 3 ] [ 2, 3, 4 ]
```

```js
let arr = [1, 2, 3];
let result = arr.map((x) => (x = x + 1));
console.log(arr, result); //[ 1, 2, 3 ] [ 2, 3, 4 ]
```

---

- `filter` : return a `new array` which item match the condition, not change original array.

```js
let arr = [1, 2, 3, 4];
let result = arr.filter(function (value) {
  return value % 2 === 0;
});
console.log(arr, result); //[ 1, 2, 3 ] [ 2, 4 ]
```

```js
let arr = [1, 2, 3, 4];
let result = arr.filter((x) => x % 2 === 0);
console.log(arr, result); //[ 1, 2, 3 ] [ 2, 4 ]
```

---

- `some` : return true if any elem match the condition, otherwise return false

```js
let arr = [1, 2, 3, 4];
let result = arr.some((value) => {
  return value % 2 === 0;
});
console.log(arr, result); //[ 1, 2, 3 ] true
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
arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
  // return result from executing something for accumulator or currentValue
}[, initialValue]);
```

```js
let total = [0, 1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
```

---

```js
let arr = [1, 2, 3, 4];
let result = arr.reduce(function (prev, cur, index, array) {
  return prev + cur;
});
console.log(arr, result); //[ 1, 2, 3 ] 10
```

```js
let arr = [1, 2, 3, 4];
let max = arr.reduce(function (prev, cur) {
  return Math.max(prev, cur);
});
console.log(arr, max); // [ 1, 2, 3, 4 ] 4
```

```js
let arr = [1, 2, 3, 4];
let max = arr.reduce((prev, cur) => Math.max(prev, cur));
console.log(arr, max); // [ 1, 2, 3, 4 ] 4
```

---

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
  - `entries()`

---

```js
let arr = [1, 2, 3];
Array.prototype.foo = function () {
  console.log('foo');
};
for (let index in arr) {
  // in : index?
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

- similar Array, iterator, such as `DOM`, has length, Can NOT use `push()`, etc.
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

- copyWithin() : shallow copy
- `arr.copyWithin(target[, start[, end]])`

```js
const array1 = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
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
function fun1(z, x = 1, y = 2) {}
console.log(fun1.length); // 1

function fun1(x = 1, y = 2, z) {}
console.log(fun1.length); // 0

function func2(a, b) {}
console.log(func2.length); // 2
```

---

### 函数的参数 (2020-10-15)

```js
let x = 1;
function foo(x, y = x) {
  console.log(y); // 2
}
foo(2);
```

```js
let x = 1;
function foo(y = x) {
  let x = 2;
  console.log(y); // 1
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

---

```js
console.log(new Function().name); //anonymous
```

```js
console.log(function () {}.bind({}).name); // bound
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

---

### 扩展运算符与 rest 参数 (2020-10-15, 16)

- `...` : split
- `rest` : combine
- `Array.prototype.push.apply`

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(...arr1); // 1 2 3
console.log(...arr2); // 4 5 6
console.log(arr1.push(...arr2)); // 6 ???
Array.prototype.push.apply(arr1, arr2); // [1, 2, 3, 4, 5, 6]
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
    sum += item;
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

### Arrow function vs. this

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

- `arrow function` can NOT create `New` function : error `not a constructor`
- `arrow function` can NOT use `arguments` : error `not defined`
- `arrow function` can use `...` rest

```js
let foo = (...args) => console.log(args); // 1 2 3
foo(1, 2, 3);
```

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
    console.log('studyArrow', this.name); // undefined : no this inside arrow function, this is obj, obj.name undefined
  },
};
obj.studyArrow(); // undefined
console.log(obj.studyArrow);
```

---

### 对象的扩展 (2020-11-17)

- `Object.is()`
- `Object.assign()`
- `in`
- `object iteration`

---

- `Object.is()`

```js
console.log(Object.is(2, '2')); //false
console.log(NaN == NaN); //false
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(+0, -0)); //false
console.log(Object.is({}, {})); //false
```

---

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
let arr [1, 2, 3];
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

- `Object.assign()` : `shallow copy`
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
console.log('target', target); //target { a: '100', b: '2' }
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

- `constructor Function` (ES5)
- `class` (ES6)
- `object`
- use `prototype` to define a function inside `constructor function`

---

### class vs constructor function vs factory function

- https://stackoverflow.com/questions/8698726/constructor-function-vs-factory-functions

```js
// ES5
function ConstructorFunction() {
  this.someProp1 = '1';
  this.someProp2 = '2';
}
ConstructorFunction.prototype.someMethod = function () {
  /* whatever */
};
```

---

```js
function factoryFunction() {
  var obj = {
    someProp1: '1',
    someProp2: '2',
    someMethod: function () {
      /* whatever */
    },
  };
  // other code to manipulate obj in some way here
  return obj;
}
```

---

- https://stackoverflow.com/questions/41659343/clarification-need-in-class-vs-constructor-function-vs-factory-function

---

### static way

- such as `Math`, `Math.max()`

```js
function People() {}
People.count = 0;
People.getCount = function () {
  console.log(this); // undefined
  console.log('People.count', People.count);
};
```

---

### children class parent class (ES6)

- `class`
- `constructor`
- `super`
- `get`, `set`
- `static`
- `this[variableName]`

---

```js
const sys = Symbol('xing');
class Child extends Parent {
  constructor(name, num) {
    // Calling parent's constructor
    super(name);
    this.num = num;
    this[sys] = 'xing sing';
  }

  display() {
    // Calling display() from parent
    super.display();
    console.log('num: ' + this.num, 'Symbol', this[sys]);
  }
}
```

---

### symbol (2020-11-27, 29, 30)

- do NOT use `new`

```js
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2); // false
console.log(Symbol.keyFor(s1)); // undefined
```

- `Symbol.for` global

```js
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
console.log(s1 === s2); // true
console.log(Symbol.keyFor(s1)); // foo
```

---

```js
let s1 = Symbol('foo');
let s2 = Symbol('bar');
console.log(s1 === s2); // false
```

```js
const obj = { name: 'xing' };
let s = Symbol(obj);
console.log(s);
```

---

- can obj has duplicate key ?
- use `Symbol` as `object key`

```js
const stu1 = 'xing';
const stu2 = 'xing';
const grade = {
  stu1: { add: 'yyy', tel: '111' },
  stu2: { add: 'zzz', tel: '222' },
};
console.log(grade); // { stu1: { add: 'yyy', tel: '111' }, stu2: { add: 'zzz', tel: '222' } }
```

```js
const stu1 = 'xing';
const stu2 = 'xing';
const grade = {
  [stu1]: { add: 'yyy', tel: '111' },
  [stu2]: { add: 'zzz', tel: '222' },
};
console.log(grade); //  xing: { add: 'zzz', tel: '222' } }
```

---

- use `Symbol` to handle duplicate

```js
const stu1 = Symbol('xing');
const stu2 = Symbol('xing');
const grade = {
  [stu1]: { add: 'yyy', tel: '111' },
  [stu2]: { add: 'zzz', tel: '222' },
};
console.log(grade);
console.log(grade[stu1]);
console.log(grade[stu2]);
/* 
{
  [Symbol(xing)]: { add: 'yyy', tel: '111' },
  [Symbol(xing)]: { add: 'zzz', tel: '222' }
}
*/
```

---

- `for...in` can NOT show symbol
- `for... key of Object.keys` can NOT show symbol
- `for... key of Object.getOwnPropertySymbols` can only show symbol
- `for... key of Reflect.ownKeys` can show both symbol and other properties

---

```js
const shapeType = {
  triangle: Symbol(),
  circle: Symbol(),
};

function getArea(shape) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
    case shapeType.circle:
      area = 1;
      break;
  }
}
```

---

### Set (2020-11-30)

- unique value : remove duplicate
- `add`
- `delete`
- `clear`
- `has`
- `size`
- `key` and `value` are same

---

- remove duplicate
- combine and remove duplicate

```js
let arr1 = [1, 2, 3, 4];
let arr1 = [3, 4, 5];
let s = new Set([...arr1, ...arr2]);
console.log(s); // new Set
console.log([...s]); // new Array
console.log(Array.from(s)); // new Array
```

---

- get union value

```js
let result = new Set(arr1.filter((item) => s2.has(item)));
console.log(Array.from(result));
```

- get diff value

```js
let r1 = new Set(arr1.filter((item) => !s2.has(item)));
let r2 = new Set(arr2.filter((item) => !s1.has(item)));
con;
console.log([...r1, ...r2]);
```

---

### WeakSet :

- WeakSet only has `object`,
- WeakSet CANNOT iteration,
- WeakSet : GC not consider the obj is using by WeakSet

---

- add

```js
let ws = new WeakSet();
ws.add({ name: 'xing' });
ws.add({ age: 19 });
console.log(ws);
```

- `delete` may not work, when you delete obj, because the obj look same, but there are different address. only delete the obj has same address

---

### WeakSet vs Set (2020-11-02)

- `Set`s can store any value. `WeakSet`s are collections of objects only.
- `WeakSet` does not have size property.
- `WeakSet` does not have clear, keys, values, entries, forEach methods.
- `WeakSet` is not iterable

---

### Map (2020-11-02)

- `set`
- `get`
- `has`

```js
let m =new Map();
let obj ={
  name ='xing'
}
m.set(obj, 'es');
console.log(m.get(obj))
```

---

```js
let map = new Map([
  ['name', 'xing'],
  ['age', 20],
]);
console.log(map);
console.log(map.size);
console.log(map.has('name'));
console.log(map.get('name'));
```

```js
for (let [key, value] of map) {
}
for (let [key, value] of map.entries) {
}
for (let key of map.keys()) {
}
for (let value of map.values()) {
}
```

---

### WeakMap (2020-11-10)

- The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced.
- Keys of WeakMaps are of the type `Object only`. Primitive data types as keys are `NOT` allowed (e.g. a Symbol can't be a WeakMap key).

---

### 字符串的扩展 (2020-11-10)

- `Unicode` : `UTF-8 is recommended`.
  - https://developer.mozilla.org/en-US/docs/Glossary/Unicode
  - The most common Unicode character encoding on the Web is `UTF-8`. Other encodings exist, like UTF-16 or the obsolete UCS-2, but `UTF-8 is recommended`.

---

![75% bg brightness:0.9](string.png)

---

### Proxy - ES5

- Object.defineProperty()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

```js
let obj = {};
let newVal = '';
Object.defineProperty(obj, 'name', {
  get() {
    return newVal;
  },
  set(val) {
    newVal = val;
  },
});
obj.name = 'es';
console.log(obj.name);
```

---

### Proxy - ES6

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- With a Proxy, you can easily `validate the passed value` for an object. This example uses the set handler.
- A function proxy could easily extend a constructor with a new constructor.
- https://www.youtube.com/watch?v=WQmqCF9a6oA&list=PL9nxfq1tlKKn96qqvz92I-09Qg21F12c2&index=28

---

```js
let arr = [7, 8, 9];
arr = new Proxy(arr, {
  get(target, prop) {
    // console.log(target, prop)
    return prop in target ? target[prop] : 'err';
  },
});

let dict = {
  k1: 'KEY ONE',
  k2: 'KEY TWO',
};
dict = new Proxy(dict, {
  get(target, prop) {
    // console.log(target, prop)
    return prop in target ? target[prop] : prop;
  },
});
console.log(dict['k1']); //KEY ONE
console.log(dict['k10']); //k10
```

---

```js
let user = {
  name: 'xing',
  age: 28,
  _password: '***',
};
user = new Proxy(user, {
  get(target, prop) {
    if (prop.startWith('_')) {
      throw new Error('err');
    } else {
      return targe[prop];
    }
  },
  set(target, prop, val) {
    if (prop.startWith('_')) {
      throw new Error('err');
    } else {
      target[prop] = val;
      return targe[prop];
    }
  },
});
```

---

![75% bg brightness:0.9](p1.png)

---

![75% bg brightness:0.9](p2.png)

---

### Reflect

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
- `Reflect` is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of `proxy handlers`.
- `Reflect` is NOT a function object, so it's not constructible.
- You cannot use it with a new operator or invoke the `Reflect` object as a function. 
- All properties and methods of Reflect are `static` (just like the Math object).

---
