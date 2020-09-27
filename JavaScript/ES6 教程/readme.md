---
marp: true
theme: default
header: 'ES6 教程'
footer: 'study note by Xing'
paginate: true
size: 16:9
---

# ES6 教程

- https://wangdoc.com/es6/
- 标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份
- ECMAScript 当前的所有提案，可以在 TC39 的官方网站 GitHub.com/tc39/ecma262
- 各大浏览器对 ES6 的支持可以查看 kangax.github.io/compat-table/es6/

---

- ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）. Node.js 是 JavaScript 的服务器运行环境（runtime）
- 可以查看 Node.js 默认没有打开的 ES6 实验性语法。

```Javascript
// Linux & Mac
$ node --v8-options | grep harmony

// Windows
$ node --v8-options | findstr harmony
```

---

### Babel

- https://wangdoc.com/es6/intro.html
- `Babel` 是一个广泛使用的 `ES6` 转码器，可以将 `ES6` 代码转为 `ES5` 代码，从而在老版本的浏览器执行
- `$ npm install --save-dev @babel/core`
- `Babel` 的配置文件是`.babelrc`，存放在项目的根目录下。使用 `Babel` 的第一步，就是配置这个文件。
- 所有 `Babel` 工具和模块的使用，都必须先写好`.babelrc`

---

- `Babel` 默认只转换新的 `JavaScript` 句法（syntax），而不转换新的 `API`，比如 `Iterator`、`Generator`、`Set`、`Map`、`Proxy`、`Reflect`、`Symbol`、`Promise` 等全局对象，以及一些定义在全局对象上的方法（比如 `Object.assign`）都不会转码

### polyfill

- https://wangdoc.com/es6/intro.html

---

### let 和 const 命令

- `let`命令所在的代码块内有效
- `let`命令所声明的变量一定要在声明后使用，否则报错。
- `let` 不允许在相同作用域内，重复声明同一个变量
- `var`命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`
- 只要块级作用域内存在 let 命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

```js
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

---

- ES6 明确规定，如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

- 总之，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

- `typeof` 不再是一个百分之百安全的操作。

```js
typeof x; // ReferenceError
let x;
```

- 作为比较，如果一个变量根本没有被声明，使用 typeof 反而不会报错。

```js
typeof undeclared_variable; // "undefined"
```

---

- ES6 规定暂时性死区和 let、const 语句不出现变量提升

---

- ES5 只有全局作用域和函数作用域，没有块级作用域
- 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。

```js
// IIFE 写法
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}
```

---

- ES5 中 if 内声明的函数 f 会被提升到函数头部
- ES6 环境中，块级作用域内声明的函数，行为类似于 var 声明的变量。
- 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

---

### const 命令

- const 一旦声明变量，就必须立即初始化，不能留到以后赋值
- const 实际上保证的，并不是变量的值不得改动，而是`变量指向的那个内存地址`所保存的数据不得改动
- 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。

---

- 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。

```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop; // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

---

- 如果真的想将对象冻结，应该使用 Object.freeze 方法。

```js
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```

---

- ES5 只有两种声明变量的方法：var 命令和 function 命令。
- ES6 除了添加 let 和 const 命令，后面章节还会提到，另外两种声明变量的方法：import 命令和 class 命令。所以，ES6 一共有 6 种声明变量的方法。

---

### 顶层对象的属性

- 在浏览器环境指的是 window 对象，在 Node 指的是 global 对象
- 全局变量 a 由 var 命令声明，所以它是顶层对象的属性；全局变量 b 由 let 命令声明，所以它不是顶层对象的属性，返回 undefined

```js
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a; // 1

let b = 1;
window.b; // undefined
```

---

### global This

- 浏览器里面，顶层对象是 window，但 Node 和 Web Worker 没有 window。
- 浏览器和 Web Worker 里面，self 也指向顶层对象，但是 Node 没有 self。
- Node 里面，顶层对象是 global，但其他环境都不支持。

---

### 数组的解构赋值

```js
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo; // 1
bar; // 2
baz; // 3

let [, , third] = ['foo', 'bar', 'baz'];
third; // "baz"

let [x, , y] = [1, 2, 3];
x; // 1
y; // 3

let [head, ...tail] = [1, 2, 3, 4];
head; // 1
tail; // [2, 3, 4]

let [x, y, ...z] = ['a'];
x; // "a"
y; // undefined
z; // []
```

---

- 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

```js
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
sixth; // 5
```

---

### 默认值

- ES6 内部使用严格相等运算符（`===`），判断一个位置是否有值。所以，只有当一个数组成员严格等于 `undefined`，默认值才会生效。
- 如果一个数组成员是 null，默认值就不会生效，因为 null 不严格等于 undefined。

```js
let [x = 1] = [undefined];
x; // 1

let [x = 1] = [null];
x; // null
```

---
