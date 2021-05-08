---
marp: true
theme: default
header: 'https://www.interviewbit.com/'
footer: 'study note by Xing, source https://www.interviewbit.com/'
paginate: true
size: 16:9
---

# Memory Management

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management
- JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection)

---

```js
var n = 123; // allocates memory for a number
var s = 'azerty'; // allocates memory for a string

var s2 = s.substr(0, 3); // s2 is a new string
// Since strings are immutable values, JavaScript may decide to not allocate memory, but just store the [0, 3] range.

var o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and contained values
var a = [1, null, 'abra'];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener(
  'click',
  function () {
    someElement.style.backgroundColor = 'blue';
  },
  false
);
```

---

# garbage collection 垃圾回收算法主要依赖于引用的概念

- `Reference-counting` garbage collection
- Limitation: `Circular references`
- `Mark-and-sweep` algorithm : This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable".
- “对象”的概念不仅特指 JavaScript 对象，还包括函数作用域（或者全局词法作用域）

---

### Mark-and-sweep 标记-清除算法

- 标记-清除算法 : 这个算法把“对象是否不再需要”简化定义为“对象是否可以获得”。
- 这个算法假定设置一个叫做根（`root`）的对象（在 Javascript 里，根是`全局对象`）。垃圾回收器将定期从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象……从根开始，垃圾回收器将找到所有可以获得的对象和收集所有不能获得的对象.

---

# var vs let vs const

```js
var a = 10;
{
  var a = -10;
}
let b = a;
{
  let b = -20;
}
console.log(b);
```

---

### scope

- `var` declarations are function scoped.
- `let` declarations are block scoped.
- `const` declarations are block scoped.

---

### Hoisting

- `Hoisting` is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
- Variables declared using `var` are hoisted to the top of their `scope` and `initialized` with a value of `undefined`(special type)
- Variables declared using `let` are hoisted to the top of their scope but are not initialized with any value.
- Variables declared using `const` are hoisted to the top of their scope but are not initialized with any value

---

### const

- A variable declared using `const` cannot be redefined or re-declared within its scope.
- Every `const` declaration `must be initialized` at the time of declaration.

---

### let

- A variable declared using `let` can be `redefined` within its scope but `cannot be` `re-declared` within its scope.

---

### var

- A variable declared using `var` can be redefined and even redeclared anywhere throughout its scope.

---

# Datatypes And Type Casting

- https://www.interviewbit.com/problems/datatypes-and-type-casting/

---

### Bits and operations on it

---

# Array

- https://www.interviewbit.com/problems/more-useful-array-methods/
- sort(): sort values as strings.
- array.sort(function(a, b){return a - b})
- reverse():

---

### Delete Element from Array

- pop - Removes from the End of an Array
- shift - Removes from the beginning of an Array
- splice - removes from a specific Array index
- filter - allows you to programmatically remove elements from an Array

---

### Finding max of an array:

- We may use `Math.max.apply` to find the highest number in an array.

```js
var A = [4, 50, 1, 20];
var z = Math.max.apply(null, A);
```

- We may use Math.min.apply to find the lowest number in an array.

```js
var A = [4, 20, 1, 50];
var z = Math.min.apply(null, A);
```

---

# Map and Filter Methods

### Filter : returns a new array.

```js
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var filtered = array.filter(function (value, index, arr) {
  return value > 5;
});
//filtered => [6, 7, 8, 9]
//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
```

---

- `array.filter(callback(element, index, arr), thisValue)`

- `callback`: This parameter holds the function to be called for each element of the array.
- `element`: The parameter holds the value of the elements being processed currently.
- `index`: This parameter is optional, it holds the index of the current value element in the array starting from 0.
- `arr`: This parameter is optional, it holds the complete array on which Array.filter() is called.
- `thisValue`: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.

---

### map

- `array.map(callback(element, index, arr), thisValue)`

- `callback`: This parameter holds the function to be called for each element of the array.
- `element`: The parameter holds the value of the elements being processed currently.
- `index`: This parameter is optional, it holds the index of the current value element in the array starting from 0.
- `arr`: This parameter is optional, it holds the complete array on which Array.map() is called.
- `thisValue`: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.

---

### String

```js
JavaScript provides a lot of string methods which help in working with strings. Some of them are:

charAt(): It provides the char value present at the specified index.
charCodeAt(): It provides the Unicode value of a character present at the specified index.
concat(): It provides a combination of two or more strings.
indexOf(): It provides the position of a char value present in the given string.
lastIndexOf(): It provides the position of a char value present in the given string by searching a character from the last position.
search(): It searches a specified regular expression in a given string and returns its position if a match occurs.
match(): It searches a specified regular expression in a given string and returns that regular expression if a match occurs.
replace(): It replaces a given string with the specified replacement.
substr(): It is used to fetch the part of the given string on the basis of the specified starting position and length.
substring(): It is used to fetch the part of the given string on the basis of the specified index.
slice(): It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
toLowerCase(): It converts the given string into lowercase letter.
toLocaleLowerCase(): It converts the given string into lowercase letter on the basis of host?s current locale.
toUpperCase(): It converts the given string into uppercase letter.
toLocaleUpperCase(): It converts the given string into uppercase letter on the basis of host?s current locale.
split(): It splits a string into substring array, then returns that newly created array.
trim(): It trims the white space from the left and right side of the string
```

---

### Regex in JS

- https://www.interviewbit.com/problems/regex-in-js/

```js
var Str = readLine().trim();
var pattern = readLine().trim();
let p1 = new RegExp(pattern, 'i');
var z = Str.search(p1);
console.log(z >= 0);

let p2 = new RegExp(pattern, 'i');
console.log(p2.test(Str));
```

---

### new Function

```js
var x = new Function('a', 'b', 'return a + b');
var z = x(7, 5);
//This is similar to using var x = function (a, b) {return a + b}; So here again 12 will be stored in z.
```

---

### Nested Functions

```js
function fun1(a) {
  a *= 2;
  function fun2(b) {
    return a + b;
  }
  a += 2;
  return fun2;
}

function fun3() {
  return fun1(2)(2);
}

console.log(fun3());
```

---

# Function

- Both `arrow functions` and `regular functions` can be used as object methods.
- `regular function`
- `Regular functions` have their own dynamic `this` binding, while `arrow functions` do not have their own this.
- `this` binding

```js
function fun() {
  console.log(this);
}
fun(); // prints global object (window)
```

---

### regular function

- The above three methods of declaration are refereed as regular function declaration.

- The only difference in the above declarations is in the `stack trace` that appears when there is an error.

```js
function hello() {
  console.log('Hello world');
}

const hi = function hi() {
  console.log('Hi world');
};

const bye = function () {
  //using anonymous function
  console.log('Bye world');
};
```

---

### Arrow functions

- Both arrow functions and regular functions can be used as object methods.

```js
const hello = () => {
  console.log('Hello world');
};
```

```js
const helloName = (name) => 'Hello ' + name;
```

---

- The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

- In the following example, fun1() is an outer regular function of fun2() arrow function:

```js
const obj = {
  fun1(items) {
    console.log(this); // prints obj
    const fun2 = () => {
      console.log(this); // prints obj
    };
  },
};
```

- this value inside the arrow function fun2() equals to this value of the outer function fun1().

---

### arguments object

- Inside the body of a `regular function`, arguments is a special `array-like object` containing the list of arguments with which the function has been invoked.

```js
function fun() {
  console.log(arguments);
}
myFunction('a', 'b'); // prints { 0: 'a', 1: 'b'}
```

---

- No arguments object is defined inside an arrow function.

- The arguments object is resolved lexically: the arrow function accesses arguments from the closest outer non-arrow function.

```js
function fun1() {
  const fun2 = () => {
    console.log(arguments);
  };

  fun2('c', 'd');
}

fun1('a', 'b'); // prints { 0: 'a', 1: 'b' }
```

---

### new keyword

- Regular functions created using function declarations or expressions are constructible (means that we can use regular functions as constructors) and callable. And since regular functions are constructible, they can be called using the new keyword.

```js
function fun() {
  console.log('hello');
}
const obj = new fun(); //valid code
```

- The arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be called with the new keyword.

```js
let fun = () => {
   console.log("hello);
}
const obj = new fun(): // Gives error
```

---

# Recursion
