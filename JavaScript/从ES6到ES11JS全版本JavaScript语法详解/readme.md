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

### let

- 2020-10-10
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

### how the variable saved in JS

- `stack`
  - primate : value (num, str)
  - object : address (obj, arr, etc)
- `heap`
  - value related the obj address from stack

### 解构赋值