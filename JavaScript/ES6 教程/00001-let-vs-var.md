---
marp: true
theme: default
header: 'Es6 语法详解'
footer: 'study note by Xing, source https://wangdoc.com/es6'
paginate: true
size: 16:9
---

- var

```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

- let

```js
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

---

- 上面代码中，变量 i 是 var 命令声明的，在全局范围内都有效，所以全局只有一个变量 i。每一次循环，变量 i 的值都会发生改变，而循环内被赋给数组 a 的函数内部的 console.log(i)，里面的 i 指向的就是全局的 i。也就是说，所有数组 a 的成员里面的 i，指向的都是同一个 i，导致运行时输出的是最后一轮的 i 的值，也就是 10。

如果使用 let，声明的变量仅在块级作用域内有效，最后输出的是 6。

var a = [];
for (let i = 0; i < 10; i++) {
a[i] = function () {
console.log(i);
};
}
a[6](); // 6

for (let i = 0; i < 3; i++) {
let i = 'abc';
console.log(i);
}
// abc
// abc
// abc
上面代码正确运行，输出了 3 次 abc。这表明函数内部的变量 i 与循环变量 i 不在同一个作用域，有各自单独的作用域

// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined
