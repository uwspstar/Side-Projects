---
marp: true
theme: default
header: 'ES6 教程 : https://wangdoc.com/es6/'
footer: 'study note by Xing, source https://wangdoc.com/es6/'
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

- https://babeljs.io/repl
- https://wangdoc.com/es6/intro.html
- `Babel` 是一个广泛使用的 `ES6` 转码器，可以将 `ES6` 代码转为 `ES5` 代码，从而在老版本的浏览器执行
- `$ npm install --save-dev @babel/core`
- `Babel` 的配置文件是`.babelrc`，存放在项目的根目录下。使用 `Babel` 的第一步，就是配置这个文件。
- 所有 `Babel` 工具和模块的使用，都必须先写好`.babelrc`

---

- `Babel` 默认只转换新的 `JavaScript` 句法（syntax），而不转换新的 `API`，比如 `Iterator`、`Generator`、`Set`、`Map`、`Proxy`、`Reflect`、`Symbol`、`Promise` 等全局对象，以及一些定义在全局对象上的方法（比如 `Object.assign`）都不会转码

### polyfill

- https://developer.mozilla.org/en-US/docs/Glossary/Polyfill
- https://wangdoc.com/es6/intro.html

---

### let 和 const 命令

- `let`命令所在的代码块内有效
- `let`命令所声明的变量一定要在声明后使用，否则报错。
- `let` 不允许在相同作用域内，重复声明同一个变量
- `var`命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`
- 只要块级作用域内存在 `let` 命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

```js
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

---

- `ES6` 明确规定，如果区块中存在 `let` 和 `const` 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

- 总之，在代码块内，使用 `let` 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

---

- `typeof` 不再是一个百分之百安全的操作。

```js
typeof x; // ReferenceError
let x;
```

- 作为比较，如果一个变量根本没有被声明，使用 `typeof` 反而不会报错。

```js
typeof undeclared_variable; // "undefined"
```

- `ES6` 规定暂时性死区和 `let`、`const` 语句不出现变量提升

---

- `ES5` 只有全局作用域和函数作用域，没有块级作用域
- `块级作用域`的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。

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

### JavaScript 中 块级作用域 和 函数作用域

- https://www.jianshu.com/p/a7f9951f329a
- `函数作用域`: ES5, ES6 语法并没有变化：作用域仅限于函数内部.

```js
function add(a, b) {
  var sum = a + b;
  return sum;
}
console.log(add(1, 3));
console.log(sum); //  ReferenceError: sum is not defined
```

---

- 块级作用域：ES6 带来的新特性，在 ES5 中时没有这个功能滴. 而`块级作用域`指的就是使用 `if () { }; while ( ) { } `...这些语句所形成的语句块 , 并且其中变量必须使用 `let` 或 `const` 声明,保证了外部不可以访问语句块中的变量.

```js
if (true) {
  var name = 'bob';
  console.log(name); // bob
}
console.log(name); // ES5 bob; if语句内部访问name还是在外部访问name都不会报错
```

- ES6 作用完全一样,你的变量不论是使用 var 声明还是使用了 let ,const 声明在外部都是不可以访问的.

---

- `ES5` 中 `if` 内声明的函数 `f` 会被提升到函数头部
- `ES6` 环境中，块级作用域内声明的函数，行为类似于 `var` 声明的变量。
- 考虑到环境导致的行为差异太大，`应该避免在块级作用域内声明函数`。如果确实需要，也`应该写成函数表达式`，而不是函数声明语句。

---

### const 命令

- `const` 一旦声明变量，就必须立即初始化，不能留到以后赋值
- `const` 实际上保证的，并不是变量的值不得改动，而是`变量指向的那个内存地址` 所保存的内存地址数据不得改动

---

- 对于简单类型的数据（`数值`、`字符串`、`布尔值`），值就保存在变量指向的那个内存地址，因此等同于常量。(`stack` vs `heap`)

- 但对于复合类型的数据（主要是`对象和数组`），变量指向的内存地址，`保存的只是一个指向实际数据的指针`，`const` 只能`保证这个指针是固定的`（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。

```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop; // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

---

### 对象冻结

- 如果真的想将对象冻结，应该使用 Object.freeze 方法。

```js
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```

---

- `ES5` 只有两种声明变量的方法：`var` 命令和 `function` 命令。
- `ES6` 共有 6 种声明变量的方法. 除了添加 `let` 和 `const` 命令，另外两种声明变量的方法：`import` 命令和 `class` 命令.

---

### 顶层对象的属性

- 在浏览器环境指的是 `window` 对象，在 Node 指的是 `global` 对象
- 全局变量 a 由 `var` 命令声明，所以它是顶层对象的属性；全局变量 b 由 `let` 命令声明，所以它不是顶层对象的属性，返回 `undefined`

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

- `浏览器里面`，顶层对象是 `window`，但 `Node` 和 `Web Worker` 没有 window。
- `浏览器`和 `Web Worker` 里面，`self` 也指向顶层对象，但是 `Node` 没有 `self`。
- `Node` 里面，顶层对象是 `global`，但其他环境都不支持。

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
```

---

- `...` means `array []`

```js
let [head, ...tail] = [1, 2, 3, 4];
head; // 1
tail; // [2, 3, 4]

let [x, y, ...z] = ['a'];
x; // "a"
y; // undefined
z; // []
```

---

- 事实上，只要某种数据结构具有 `Iterator` 接口，都可以采用数组形式的解构赋值。

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

- `ES6` 内部使用严格相等运算符（`===`），判断一个位置是否有值。所以，只有当一个数组成员严格等于 `undefined`，默认值才会生效。
- 如果一个数组成员是 `null`，默认值就不会生效，因为 `null` 不严格等于 `undefined`。

```js
let [x = 1] = [undefined];
x; // 1

let [x = 1] = [null];
x; // null
```

---

### 注意点

- 如果要将一个已经声明的变量用于解构赋值，必须非常小心. 因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。

```js
// 错误的写法
let x;
{x} = {x: 1}; // SyntaxError: syntax error
// 正确的写法
let x;
({x} = {x: 1});
```

---

- https://wangdoc.com/es6/destructuring.html
- 解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。

```js
({} = [true, false]);
({} = 'abc');
({} = []);
```

---

### 字符串的解构赋值

```js
const [a, b, ...c] = 'hello';
console.log(c); // [ 'l', 'l', 'o' ]
```

- 类似数组的对象都有一个 length 属性，因此还可以对这个属性解构赋值。

```js
let { length: len } = 'hello';
len; // 5
```

---

### 数值和布尔值的解构赋值

- 只要等号右边的值不是对象或数组，就先将其转为对象。由于 undefined 和 null 无法转为对象，所以对它们进行解构赋值，都会报错

```js
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError

let { toString: s } = 123;
s === Number.prototype.toString; // true

let { toString: s } = true;
s === Boolean.prototype.toString; // true
```

---

### 函数参数的解构赋值

```js
[
  [1, 2],
  [3, 4],
].map(([a, b]) => a + b);
// [ 3, 7 ]
```

```js
function move({ x = 0, y = 0 } = {}) {
  return [x, y];
}
move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
```

---

### 圆括号问题

- ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。
- 建议只要有可能，就不要在模式中放置圆括号

### 不能使用圆括号的情况

- 变量声明语句
- 函数参数也属于变量声明，因此不能带有圆括号。
- 赋值语句的模式

### 可以使用圆括号的情况

---

### 变量的解构赋值用途

- 输入模块的指定方法 `const { SourceMapConsumer, SourceNode } = require("source-map");`
- 交换变量的值 `const swap = (arr,i,j) => [[i],[j]] =[[j],[x]];`
- 从函数返回多个值 `let [a, b, c] = example();`, `let { foo, bar } = example();`
- 函数参数的定义 `function f({x, y, z}) { ... } f({z: 3, y: 2, x: 1});`
- 提取 `JSON` 数据 `let { id, status, data: number } = jsonData;`
- 函数参数的默认值

---

### 字符串的扩展

- 字符的 Unicode 表示法 : 采用`\uxxxx`形式表示一个字符
  - 超出这个范围 `\u0000~\uFFFF` 之间的字符，必须用两个双字节的形式表示。`"\u20BB7"// " 7"`
- JavaScript 共有 6 种方法可以表示一个字符。

```js
'z' === 'z'; // true
'\172' === 'z'; // true
'\x7A' === 'z'; // true
'\u007A' === 'z'; // true
'\u{7A}' === 'z'; // true
```

---

- ES6 为字符串添加了遍历器接口 `for (let codePoint of 'foo') { console.log(codePoint) }`
- JavaScript 规定有 5 个字符，不能在字符串里面直接使用，只能使用转义形式。

```js
U+005C：反斜杠（reverse solidus)
U+000D：回车（carriage return）
U+2028：行分隔符（line separator）
U+2029：段分隔符（paragraph separator）
U+000A：换行符（line feed）
```

---

### JSON.stringify()

- JSON 数据必须是 UTF-8 编码。但是，现在的 JSON.stringify()方法有可能返回不符合 UTF-8 标准的字符串

### 模板字符串

- 模板字符串（template string）是增强版的字符串，用反引号（`）标识
- 如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
- `let greeting = `\`Yo\` World!`;`
- 模板字符串中嵌入变量，需要将变量名写在\${}之中, 如果模板字符串中的变量没有声明，将报错。

```js
`User ${user.name} is not authorized to do ${action}.`);
```

---

### 标签模板

- 标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数

```js
alert`hello`;
// 等同于
alert(['hello']);
```

- 就是过滤 HTML 字符串，防止用户输入恶意内容
- 标签模板的另一个应用，就是多语言转换（国际化处理）

```js
i18n`Welcome to ${siteName}`;
```

---

- 对字符串转义的放松，只在标签模板解析字符串时生效，不是标签模板的场合，依然会报错

---

### 字符串的新增方法

- https://wangdoc.com/es6/string-methods.html

#### String.fromCodePoint() vs String.fromCharCode()

- `ES5` 提供 `String.fromCharCode()`方法，用于从 `Unicode` 码点返回对应字符，但是这个方法不能识别码点大于 `0xFFFF` 的字符
- `ES6` 提供了 `String.fromCodePoint()`方法，可以识别大于 `0xFFFF` 的字符
- 如果 `String.fromCodePoint` 方法有多个参数，则它们会被合并成一个字符串返回。

---

#### String.raw()

- `ES6` `String.raw()` 方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用

---

#### codePointAt

- 注意，`fromCodePoint` 方法定义在 `String` 对象上，而 `codePointAt` 方法定义在字符串的实例对象上
- `JavaScript` 内部，字符以 `UTF-16` 的格式储存，每个字符固定为 2 个字节。
- 对于那些需要 4 个字节储存的字符（`Unicode` 码点大于 `0xFFFF` 的字符），`JavaScript` 会认为它们是两个字符。

---

- ES6 提供了 codePointAt()方法，能够正确处理 4 个字节储存的字符
- codePointAt()方法会正确返回 32 位的 UTF-16 字符的码点。对于那些两个字节储存的常规字符，它的返回结果与 charCodeAt()方法相同
- codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。

```js
function is32Bit(c) {
  return c.codePointAt(0) > 0xffff;
}

is32Bit('𠮷'); // true
is32Bit('a'); // false
```

---

#### normalize()

- ES6 提供字符串实例的 normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化.
- normalize 方法可以接受一个参数来指定 normalize 的方式

  ```js
  '\u01D1'.normalize() === '\u004F\u030C'.normalize()`
  ```

---

#### includes(), startsWith(), endsWith()

- 传统上，JavaScript 只有 indexOf 方法，可以用来确定一个字符串是否包含在另一个字符串中。
- ES6 又提供了三种新方法。这三个方法都支持第二个参数，表示开始搜索的位置。
  - includes()：返回布尔值，表示是否找到了参数字符串。
  - startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
  - endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部

---

#### padStart()，padEnd()

- padStart()的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串

```js
'1'.padStart(10, '0'); // "0000000001"
'12'.padStart(10, 'YYYY-MM-DD'); // "YYYY-MM-12"
```

- ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。

```js
'x'.padStart(5, 'ab'); // 'ababx'
'x'.padEnd(5, 'ab'); // 'xabab'
'xxx'.padStart(2, 'ab'); // 'xxx'
'xxx'.padEnd(2, 'ab'); // 'xxx'
'abc'.padStart(10, '0123456789');
'x'.padStart(4); // '   x'
'x'.padEnd(4); // 'x   '
```

---

#### repeat()

- repeat 方法返回一个新字符串，表示将原字符串重复 n 次

#### trimStart()，trimEnd()

- trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。
- trimStart()，trimEnd() 返回的都是新字符串，不会修改原始字符串。

#### matchAll()

---

### RegExp 构造函数

- https://wangdoc.com/es6/regex.html
- 在 ES5 中，RegExp 构造函数的参数有两种情况
  - 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）
  - 第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。
- ES6 改变了这种行为。如果 RegExp 构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。

---

### 字符串的正则方法

- 字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()和 split()
- ES6 将这 4 个方法，在语言内部全部调用 RegExp 的实例方法

```js
String.prototype.match 调用 RegExp.prototype[Symbol.match]
String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
String.prototype.search 调用 RegExp.prototype[Symbol.search]
String.prototype.split 调用 RegExp.prototype[Symbol.split]
```

---

### u 修饰符

- ES6 对正则表达式添加了 u 修饰符，含义为“Unicode 模式”，用来正确处理大于\uFFFF 的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码。

### RegExp.prototype.unicode 属性

- https://wangdoc.com/es6/regex.html

### y 修饰符

- https://wangdoc.com/es6/regex.html

---

### Iterator 遍历器转为数组

- 使用...运算符和 Array.from()方法就可以了

```js
// 转为数组的方法一
[...string.matchAll(regex)];

// 转为数组的方法二
Array.from(string.matchAll(regex));
```

- ES2020 增加了 String.prototype.matchAll()方法，可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组
- string.matchAll(regex) 返回的是遍历器

---

### 数值的扩展
