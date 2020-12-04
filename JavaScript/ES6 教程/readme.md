---
marp: true
theme: default
header: 'ES6 教程 : https://wangdoc.com/es6/'
footer: 'study note by Xing, source https://wangdoc.com/es6/'
paginate: true
size: 16:9
---

# ES6 教程

- [wangdoc](https://wangdoc.com/es6/)
- 标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份
- `ECMAScript` 当前的所有提案，可以在 TC39 的官方网站 GitHub.com/tc39/ecma262
- [各大浏览器对 ES6 的支持可以查看] (kangax.github.io/compat-table/es6/)

---

- `ECMAScript` 和 `JavaScript` 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）. `Node.js` 是 `JavaScript` 的服务器运行环境（`runtime`）
- 可以查看 Node.js 默认没有打开的 ES6 实验性语法。

```Javascript
// Linux & Mac
$ node --v8-options | grep harmony

// Windows
$ node --v8-options | findstr harmony
```

---

### Babel

- [babeljs](https://babeljs.io/repl)
- [wangdoc.com/es6](https://wangdoc.com/es6/intro.html)
- `Babel` 是一个广泛使用的 `ES6` 转码器，可以将 `ES6` 代码转为 `ES5` 代码，从而在老版本的浏览器执行
- `$ npm install --save-dev @babel/core`
- `Babel` 的配置文件是`.babelrc`，存放在项目的根目录下。使用 `Babel` 的第一步，就是配置这个文件。
- 所有 `Babel` 工具和模块的使用，都必须先写好`.babelrc`

---

- `Babel` 默认只转换新的 `JavaScript` 句法（syntax），而不转换新的 `API`，比如 `Iterator`、`Generator`、`Set`、`Map`、`Proxy`、`Reflect`、`Symbol`、`Promise` 等全局对象，以及一些定义在全局对象上的方法（比如 `Object.assign`）都不会转码

---

### polyfill

- [Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)
- https://wangdoc.com/es6/intro.html

---

### let 和 const 命令

- `let` 命令所在的代码块内有效
- `let` 命令所声明的变量一定要在声明后使用，否则报错。
- `let` 不允许在相同作用域内，重复声明同一个变量
- `var` 命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`
- 只要块级作用域内存在 `let` 命令，它所声明的变量就`“绑定”(binding)`这个区域，不再受外部的影响。

---

- `ES6` 明确规定，如果区块中存在 `let` 和 `const` 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

- 总之，在代码块内，使用 `let` 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

```js
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

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
- `块级作用域`的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 `IIFE`）不再必要了。

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

- [函数作用域](https://www.jianshu.com/p/a7f9951f329a)
- `函数作用域`: ES5, ES6 语法并没有变化：作用域仅限于函数内部.
- 考虑到环境导致的行为差异太大，`应该避免在块级作用域内声明函数`。

```js
function add(a, b) {
  var sum = a + b;
  return sum;
}
console.log(add(1, 3));
console.log(sum); //  ReferenceError: sum is not defined
```

- `const add = (a,b) => a+b;`

---

- 块级作用域：ES6 带来的新特性，在 ES5 中时没有这个功能滴. 而`块级作用域`指的就是使用 `if () { }; while ( ) { } `...这些语句所形成的语句块 , 并且其中变量必须使用 `let` 或 `const` 声明,保证了外部不可以访问语句块中的变量.

```js
if (true) {
  var name = 'bob';
  console.log(name); // bob
}
console.log(name); // ES5 bob; if语句内部访问name还是在外部访问name都不会报错
```

- ES6 作用完全一样,你的变量不论是使用 `var` 声明还是使用了 `let` ,`const` 声明在外部都是不可以访问的.

---

- `ES5` 中 `if` 内声明的函数 `f` 会被提升到函数头部
- `ES6` 环境中，块级作用域内声明的函数，行为类似于 `var` 声明的变量。
- 考虑到环境导致的行为差异太大，`应该避免在块级作用域内声明函数`。如果确实需要，也`应该写成函数表达式`，而不是函数声明语句。

---

### const 命令

- `const` 一旦声明变量，`就必须立即初始化`，不能留到以后赋值
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

- 如果真的想将`对象冻结`，应该使用 `Object.freeze` 方法。

```js
const foo = Object.freeze({});
// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```

---

- `ES5` 只有两种声明变量的方法：`var` 命令和 `function` 命令。
- `ES6` 共有 `6 ` 种声明变量的方法. 除了添加 `let` 和 `const` 命令，另外两种声明变量的方法：`import` 命令和 `class` 命令.

---

### 顶层对象的属性

- 在浏览器环境指的是 `window` 对象，在 Node 指的是 `global` 对象

```js
var a = 1;
// 如果在 Node 的 REPL (交互式解释器) 环境 ，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a; // 1

let b = 1;
window.b; // undefined
```

- 全局变量 a 由 `var` 命令声明，所以它是顶层对象的属性；
- 全局变量 b 由 `let` 命令声明，所以它不是顶层对象的属性，返回 `undefined`

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

- 如果要将一个`已经声明的变量`用于解构赋值，必须非常小心.
- 因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。
- 只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。

```js
// 错误的写法
let x;
{x} = {x: 1}; // SyntaxError: syntax error
// 正确的写法
let x;
({x} = {x: 1});
```

---

- [解构赋值](https://wangdoc.com/es6/destructuring.html)
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

- 类似数组的对象都有一个 `length` 属性，因此还可以对这个属性解构赋值。

```js
let { length: len } = 'hello';
len; // 5
```

---

### 数值和布尔值的解构赋值

- 只要等号右边的值不是对象或数组，就先将其转为对象。
- 由于 `undefined` 和 `null` 无法转为对象，所以对它们进行解构赋值，都会报错.

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
- `建议只要有可能，就不要在模式中放置圆括号`

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

- 字符的 `Unicode` 表示法 : 采用`\uxxxx`形式表示一个字符
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

- JSON 数据必须是 `UTF-8` 编码。但是，现在的 `JSON.stringify()` 方法有可能返回不符合 `UTF-8` 标准的字符串

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

- 就是过滤 `HTML` 字符串，防止用户输入恶意内容
- `标签模板的另一个应用，就是多语言转换（国际化处理）`

```js
i18n`Welcome to ${siteName}`;
```

---

- 对字符串转义的放松，只在标签模板解析字符串时生效，不是标签模板的场合，依然会报错

---

### 字符串的新增方法

- [string-methods](https://wangdoc.com/es6/string-methods.html)

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

- ES6 提供字符串实例的 `normalize()` 方法，用来将字符的不同表示方法统一为同样的形式，这称为 `Unicode` 正规化.
- `normalize` 方法可以接受一个参数来指定 `normalize` 的方式

  ```js
  '\u01D1'.normalize() === '\u004F\u030C'.normalize()`
  ```

---

#### includes(), startsWith(), endsWith()

- 传统上，`JavaScript` 只有 `indexOf` 方法，可以用来确定一个字符串是否包含在另一个字符串中。
- `ES6` 又提供了三种新方法。这三个方法都支持第二个参数，表示开始搜索的位置。
  - `includes()` ：返回布尔值，表示是否找到了参数字符串。
  - `startsWith()` ：返回布尔值，表示参数字符串是否在原字符串的头部。
  - `endsWith()` ：返回布尔值，表示参数字符串是否在原字符串的尾部

---

#### padStart()，padEnd()

- `padStart()` 的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串

```js
'1'.padStart(10, '0'); // "0000000001"
'12'.padStart(10, 'YYYY-MM-DD'); // "YYYY-MM-12"
```

- `ES2017` 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()` 用于头部补全，`padEnd()` 用于尾部补全。

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

- `repeat` 方法返回一个新字符串，表示将原字符串重复 n 次

#### trimStart()，trimEnd()

- `trim()` 一致，`trimStart()` 消除字符串头部的空格，`trimEnd()` 消除尾部的空格。
- `trimStart()`，`trimEnd()` 返回的都是新字符串，不会修改原始字符串。

#### matchAll()

---

### RegExp 构造函数

- [regex](https://wangdoc.com/es6/regex.html)
- 在 ES5 中，`RegExp` 构造函数的参数有两种情况
  - 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）
  - 第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。
- ES6 改变了这种行为。如果 RegExp 构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。

---

### 字符串的正则方法

- 字符串对象共有 4 个方法，可以使用正则表达式：`match()`、`replace()`、`search()` 和 `split()`
- ES6 将这 4 个方法，在语言内部全部调用 `RegExp` 的实例方法

```js
String.prototype.match 调用 RegExp.prototype[Symbol.match]
String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
String.prototype.search 调用 RegExp.prototype[Symbol.search]
String.prototype.split 调用 RegExp.prototype[Symbol.split]
```

---

### u 修饰符

- ES6 对正则表达式添加了 u 修饰符，含义为“Unicode 模式”，用来正确处理大于\uFFFF 的 `Unicode` 字符。也就是说，会正确处理四个字节的 `UTF-16` 编码。

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

- ES2020 增加了 `String.prototype.matchAll()` 方法，可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组
- `string.matchAll(regex)` 返回的是遍历器

---

### 数值的扩展

### 二进制和八进制表示法

- ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b（或 0B）和 0o（或 0O）表示
- 从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀 0 表示，ES6 进一步明确，要使用前缀 0o 表示
- 如果要将 0b 和 0o 前缀的字符串数值转为十进制，要使用 Number 方法

```js
Number('0b111'); // 7
Number('0o10'); // 8
```

---

#### Number.isFinite(), Number.isNaN()

- 如果参数类型不是数值，`Number.isFinite` 一律返回 `false`
- 如果参数类型不是 `NaN`，`Number.isNaN` 一律返回 `false`
- 它们与传统的全局方法 `isFinite()` 和 `isNaN()` 的区别在于，传统方法先调用 `Number()` 将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，`Number.isFinite()` 对于非数值一律返回 `false`, `Number.isNaN()` 只有对于 `NaN` 才返回 `true`，非 `NaN` 一律返回 `false`。

---

#### Number.parseInt(), Number.parseFloat()

- ES6 将全局方法 `parseInt()` 和 `parseFloat()`，移植到 `Number` 对象上面，行为完全保持不变

```js
// ES5的写法
parseInt('12.34'); // 12
parseFloat('123.45#'); // 123.45

// ES6的写法
Number.parseInt('12.34'); // 12
Number.parseFloat('123.45#'); // 123.45
```

---

#### Number.isInteger() 用来判断一个数值是否为整数

- 如果对数据精度的要求较高，不建议使用 `Number.isInteger()` 判断一个数值是否为整数
- 如果参数不是数值，`Number.isInteger` 返回 `false`
- `JavaScrip`t 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。

```js
Number.isInteger(25); // true
Number.isInteger(25.0); // true
```

---

#### Number.EPSILON

- https://wangdoc.com/es6/number.html#numberepsilon
- `Number.EPSILON` 实际上是 JavaScript 能够表示的最小精度。
- 误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了

---

#### 安全整数和 Number.isSafeInteger()

- https://wangdoc.com/es6/number.html#%E5%AE%89%E5%85%A8%E6%95%B4%E6%95%B0%E5%92%8C-numberissafeinteger

### BigInt 数据类型

- https://wangdoc.com/es6/number.html#bigint-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B

- `JavaScript 所有数字都保存成 64 位浮点数`，这给数值的表示带来了两大限制。一是数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整数，JavaScript 是无法精确表示的.

---

- ES2020 引入了一种新的数据类型 `BigInt（大整数）`，来解决这个问题，这是 ECMAScript 的第八种数据类型。`BigInt` 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。`1234n // BigInt`
- `BigInt` 可以使用负号（-），但是不能使用正号（+），因为会与 `asm.js` 冲突。
- `BigInt(123) // 123n`
- 可以使用 `Boolean()`、`Number()` 和 `String()` 这三个方法，将 `BigInt` 可以转为布尔值、数值和字符串类型。
- `BigInt` 不能与普通数值进行混合运算 `1n + 1.3 // 报错`
- 同样的原因，如果一个标准库函数的参数预期是 `Number` 类型，但是得到的是一个 `BigInt`，就会报错。`Math.sqrt(4n) // 报错`
- `BigInt` 与字符串混合运算时，会先转为字符串，再进行运算。

---

### Math 对象的扩展

- https://wangdoc.com/es6/number.html#math-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95
- ES6 在 `Math` 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用

### 指数运算符

- ES2016 新增了一个指数运算符（\*\*）
- 特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的
  `2 ** 3 ** 2 // 相当于 2 ** (3 ** 2) //512`

---

### 函数的扩展

- https://wangdoc.com/es6/function.html
- ES6 允许为函数的参数设置默认值
- 参数变量是默认声明的，所以不能用 `let` 或 `const` 再次声明
- 使用参数默认值时，函数不能有同名参数
- 指定了默认值后，`length` 属性将失真 (length 属性的含义是，该函数预期传入的参数个数). 指定了默认值以后，函数的 length 属性，将返回没有指定默认值的参数个数. 默认值的参数不是尾参数，那么 length 属性也不再计入后面的参数了。
- `(function (a, b, c = 5, d) {}).length // 2`

---

- 解构赋值默认值的例子

```js
function fetch(url, { body = '', method = 'GET', headers = {} }) {
  console.log(method);
}
fetch('http://example.com', {});
// "GET"
fetch('http://example.com');
// 报错
```

---

- 如果传入 `undefined`，将触发该参数等于默认值，`null` 则没有这个效果。

```js
function foo(x = 5, y = 6) {
  console.log(x, y);
}

foo(undefined, null);
// 5 null
```

---

### 函数作用域

- [函数作用域](https://wangdoc.com/es6/function.html#%E4%BD%9C%E7%94%A8%E5%9F%9F)
- 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

---

### 函数 rest 参数

- https://wangdoc.com/es6/function.html#rest-%E5%8F%82%E6%95%B0
- `rest` 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
- `rest` 参数之后不能再有其他参数（即`只能是最后一个参数`），否则会报错

```js
// arguments变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
```

---

### 函数 严格模式

- https://wangdoc.com/es6/function.html#%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F

### 函数的 name 属性，返回该函数的函数名

- https://wangdoc.com/es6/function.html#name-%E5%B1%9E%E6%80%A7

```js
const bar = function baz() {};
// ES5
bar.name; // "baz"
// ES6
bar.name; // "baz"
```

---

### 箭头函数

- https://wangdoc.com/es6/function.html#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0
- 所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
- 箭头函数的一个用处是简化回调函数
  `var result = values.sort((a, b) => a - b);`

---

### 箭头函数有几个使用注意点。

- 1 函数体内的 `this` 对象，就是定义时所在的对象，而不是使用时所在的对象。
- 2 不可以当作构造函数，也就是说，不可以使用 `new` 命令，否则会抛出一个错误。
- 3 不可以使用 `arguments` 对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替。
- 4 不可以使用 `yield` 命令，因此箭头函数不能用作 `Generator` 函数。

---

- 上面四点中，第一点尤其值得注意。`this` 对象的指向是可变的，但是在箭头函数中，它是固定的。
- `this` 指向的固定化，并不是因为箭头函数内部有绑定 `this` 的机制，实际原因是箭头函数根本没有自己的 `this`，导致内部的 `this` 就是外层代码块的 `this`。正是因为它没有 `this`，所以也就不能用作构造函数。
- 由于箭头函数没有自己的 `this`，所以当然也就不能用 `call()`、`apply()`、`bind()`这些方法去改变 `this` 的指向

---

### 箭头函数不适用场合

- [箭头函数不适用场合](https://wangdoc.com/es6/function.html#%E4%B8%8D%E9%80%82%E7%94%A8%E5%9C%BA%E5%90%88)

---

### 尾递归函数

-[尾调用优化](https://www.ruanyifeng.com/blog/2015/04/tail-call.html)

- [尾递归函数](https://wangdoc.com/es6/function.html#%E5%B0%BE%E9%80%92%E5%BD%92)
- `ES6 中只要使用尾递归，就不会发生栈溢出`（或者层层递归造成的超时），相对`节省内存`。
- `ES6 的尾调用优化只在严格模式下开启`，`正常模式是无效的`
- 这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
  - `func.arguments` ：返回调用时函数的参数。
  - `func.caller` ：返回调用当前函数的那个函数

---

### 递归函数的改写

- [递归函数的改写](https://wangdoc.com/es6/function.html#%E9%80%92%E5%BD%92%E5%87%BD%E6%95%B0%E7%9A%84%E6%94%B9%E5%86%99)
- 尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。

---

### 递归函数的改写

- [递归函数的改写](https://wangdoc.com/es6/function.html#%E9%80%92%E5%BD%92%E5%87%BD%E6%95%B0%E7%9A%84%E6%94%B9%E5%86%99)
- 阶乘函数，计算 n 的阶乘，最多需要保存 n 个调用记录，复杂度 `O(n)` 。

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
factorial(5); // 120
```

---

### 尾递归

- 函数调用自身，称为递归。如果尾调用自身，就称为`尾递归`。
- 如果改写成尾递归，只保留一个调用记录，复杂度 `O(1)` 。

```js
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
factorial(5, 1); // 120
```

```js
factorial(5, 1);
factorial(4, 5);
factorial(3, 20);
factorial(2, 60);
factorial(1, 120);
```

---

### 尾递归优化的实现 Tail call optimization

- [尾递归优化的实现](https://wangdoc.com/es6/function.html#%E5%B0%BE%E9%80%92%E5%BD%92%E4%BC%98%E5%8C%96%E7%9A%84%E5%AE%9E%E7%8E%B0)
- 它的原理非常简单。尾递归之所以需要优化，原因是调用栈太多，造成溢出，那么只要减少调用栈，就不会溢出。怎么做可以减少调用栈呢？就是采用“循环”换掉“递归”

---

### 函数参数的尾逗号

- ES2017 允许函数的最后一个参数有尾逗号（trailing comma）

### Function.prototype.toString()

- ES2019 对函数实例的`toString()`方法做出了修改。
- `toString()`方法返回函数代码本身，以前会省略注释和空格。

---

### catch 命令的参数省略

- `JavaScript` 语言的`try...catch`结构，以前明确要求`catch`命令后面必须跟参数，接受`try`代码块抛出的错误对象.

```js
try {
  // ...
} catch (err) {
  // 处理错误
}
```

---

- 很多时候，`catch` 代码块可能用不到这个参数。但是，为了保证语法正确，还是必须写。`ES2019` 做出了改变，允许 `catch` 语句省略参数

```js
try {
  // ...
} catch {
  // ...
}
```

---

### 数组的扩展

- [数组的扩展](https://wangdoc.com/es6/array.html)

---

#### 扩展运算符 （spread）是三个点（...）

- 扩展运算符`（spread）`是三个点`（...）`

```js
[...document.querySelectorAll('div')];
// [<div>, <div>, <div>]
```

```js
const arr = [...(x > 0 ? ['a'] : []), 'b'];
```

- 注意，只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。

```js
console.log((...[1, 2]))
// Uncaught SyntaxError: Unexpected number
```

---

### 替代函数的 apply 方法 (2020-11-22)

- 扩展运算符取代 `apply` 方法

```js
// ES5 的写法
Math.max.apply(null, [14, 3, 77]);
// ES6 的写法
Math.max(...[14, 3, 77]);
// 等同于
Math.max(14, 3, 77);
```

```js
// ES5的 写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);
// ES6 的写法
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);
```

---

### 扩展运算符的应用

- 复制数组 : 扩展运算符提供了复制数组的简便写法

```js
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```

- 合并数组 : 这两种方法都是浅拷贝，使用的时候需要注意

```js
// ES5 的合并数组
arr1.concat(arr2, arr3);
// ES6 的合并数组
[...arr1, ...arr2, ...arr3];
```

---

- 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

```js
const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错
const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错
```

- 有一个重要的好处，那就是能够正确识别四个字节的 `Unicode` 字符。

```js
'x\uD83D\uDE80y'.length // 4
[...'x\uD83D\uDE80y'].length // 3
```

---

### 实现了 Iterator 接口的对象

- `querySelectorAll` 方法返回的是一个`NodeList` 对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数组，原因就在于`NodeList`对象实现了 `Iterator`

```js
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];
```

---

- 对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组

```js
let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

// TypeError: Cannot spread non-iterable object.
let arr = [...arrayLike];
```

- 这时，可以改为使用 `Array.from` 方法将 `arrayLike` 转为真正的数组。

---

### Map 和 Set 结构，Generator 函数

- 扩展运算符`内部调用`的是数据结构的 `Iterator` 接口，因此`只要具有 Iterator 接口的对象`，都可以使用扩展运算符，比如 `Map`, not `Object`

```js
let map = new Map([[1, 'one']]);
let arr = [...map.keys()];
```

- 如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错。

```js
const obj = { a: 1, b: 2 };
let arr = [...obj]; // TypeError: Cannot spread non-iterable object
```

---

- Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。

```js
const go = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...go()]; // [1, 2, 3]
```

---

### Array.from()

- `Array.from` 方法用于将两类对象转为真正的数组：`类似数组的对象（array-like object）`和`可遍历（iterable）的对象`（包括 `ES6` 新增的数据结构 `Set` 和 `Map`）。
- 只要是部署了 `Iterator` 接口的数据结构，`Array.from` 都能将其转为数组
- `Array.from`方法还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有`length`属性。因此，任何有`length`属性的对象，都可以通过`Array.from`方法转为数组，而此时扩展运算符就无法转换
- 对于还没有部署该方法的浏览器，可以用 `Array.prototype.slice` 方法替代。

---

- `Array.from` 还可以接受第二个参数，作用类似于数组的 `map` 方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
- `Array.from()`可以将各种值转为真正的数组，并且还提供`map`功能
- `Array.from()`的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 `Unicode` 字符，可以避免 `JavaScript` 将大于`\uFFFF`的 `Unicode` 字符，算作两个字符的 bug。

```js
function countSymbols(string) {
  return Array.from(string).length;
}
```

---

- `扩展运算符（...）也可以将某些数据结构转为数组`
- 扩展运算符背后调用的是遍历器接口（`Symbol.iterator`），如果一个对象没有部署这个接口，就无法转换。

### Array.of()

- Array.of 方法用于将一组值，转换为数组。
  `Array.of(3, 11, 8) // [3,11,8]`
- `Array.of` 总是返回参数值组成的数组。如果没有参数，就返回一个空数组。
- 这个方法的主要目的，是弥补数组构造函数`Array()`的不足。因为参数个数的不同，会导致`Array()`的行为有差异。

---

```js
Array(); // []
Array(3); // [, , ,]
Array(3, 11, 8); // [3, 11, 8]
```

- 上面代码中，`Array` 方法没有参数、一个参数、三个参数时，返回结果都不一样。只有当参数个数`不少于 2 个时`，`Array()`才会返回由参数组成的新数组。`参数个数只有一个时`，`实际上是指定数组的长度`。

---

### 数组实例的 find() 和 findIndex()

- 数组实例的 `find` 方法，用于找出第一个符合条件的数组成员
- 数组实例的 `findIndex` 方法的用法与 `find` 方法非常类似，返回第一个符合条件的数组成员的位置
- 这两个方法都可以接受第二个参数，用来绑定回调函数的 this 对象。

```js
function f(v) {
  return v > this.age;
}
let person = { name: 'John', age: 20 };
[10, 12, 26, 15].find(f, person); // 26
```

---

### 数组实例的 includes()

- `indexOf`方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相等运算符（`===`）进行判断，这会导致对`NaN`的误判。
  `[NaN].indexOf(NaN)// -1`
- includes 使用的是不一样的判断算法，就没有这个问题。
  `[NaN].includes(NaN)`

---

- 另外，`Map` 和 `Set` 数据结构有一个 has 方法，需要注意与`includes`区分。
- `Map` 结构的`has`方法，是用来查找键名的，比如`Map.prototype.has(key)`、`WeakMap.prototype.has(key)`、`Reflect.has(target, propertyKey)`。
- `Set` 结构的`has`方法，是用来查找值的，比如`Set.prototype.has(value)、WeakSet.prototype.has(value)`。

---

### 数组实例的 copyWithin()

### 数组实例的 fill()

```js
['a', 'b', 'c'].fill(7); // [7, 7, 7]
new Array(3).fill(7); // [7, 7, 7]
```

---

### 数组实例的 entries()，keys() 和 values()

- `ES6` 提供三个新的方法 : `entries()`，`keys()`和`values()` 用于遍历数组。它们都返回一个遍历器对象，可以用`for...of`循环进行遍历，唯一的区别是`keys()`是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值对的遍历.
- 如果不使用 `for...of` 循环，可以手动调用遍历器对象的 `next` 方法，进行遍历

---

### 数组实例的 flat()，flatMap()

- 数组的成员有时还是数组，`Array.prototype.flat()`用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

```js
[1, 2, [3, 4]].flat(); // [1, 2, 3, 4]
```

- flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将 flat()方法的参数写成一个整数，表示想要拉平的层数，默认为 1。

```js
[1, 2, [3, [4, 5]]]
  .flat() // [1, 2, 3, [4, 5]]

  [(1, 2, [3, [4, 5]])].flat(2); // [1, 2, 3, 4, 5]
```

---

- 如果原数组有空位，`flat()`方法会跳过空位。
- 如果不管有多少层嵌套，都要转成一维数组，可以用 `Infinity` 关键字作为参数。

```js
[1, [2, [3]]].flat(Infinity); // [1, 2, 3]
```

- `flatMap()`方法对原数组的每个成员执行一个函数（相当于执行 `Array.prototype.map()`），然后对返回值组成的数组执行 `flat()`方法。该方法返回一个新数组，不改变原数组。
- `flatMap()`只能展开一层数组。

```js
[1, 2, 3, 4].flatMap((x) => [[x * 2]]); // [[2], [4], [6], [8]]
```

---

### 数组的空位

- 空位不是`undefined`，一个位置的值等于`undefined`，依然是有值的。空位是没有任何值，`in` 运算符可以说明这一点。

```js
0 in [undefined, undefined, undefined]; // true
0 in [, , ,]; // false
```

- ES5 `forEach()`, `filter()`, `reduce()`, `every()` 和`some()`都会跳过空位。
- `map()`会跳过空位，但会保留这个值
- `join()`和`toString()`会将空位视为`undefined`，而`undefined`和`null`会被处理成空字符串。

---

`ES6 则是明确将空位转为undefined.`

- `Array.from`方法会将数组的空位，转为`undefined`，也就是说，这个方法不会忽略空位。

```js
Array.from(['a', , 'b']); // [ "a", undefined, "b" ]
```

---

- 由于空位的处理规则非常不统一，所以建议避免出现空位。

```js
// entries()
[...[,'a'].entries()] // [[0,undefined], [1,"a"]]
// keys()
[...[,'a'].keys()] // [0,1]
// values()
[...[,'a'].values()] // [undefined,"a"]
// find()
[,'a'].find(x => true) // undefined
// findIndex()
[,'a'].findIndex(x => true) // 0
```

---

### Array.prototype.sort() 的排序稳定性

- [排序稳定性](https://wangdoc.com/es6/array.html#arrayprototypesort-%E7%9A%84%E6%8E%92%E5%BA%8F%E7%A8%B3%E5%AE%9A%E6%80%A7)
- 常见的排序算法之中，`插入排序`、`合并排序`、`冒泡排序`等都是稳定的，
- `堆排序`、`快速排序`等是不稳定的。

---

### 对象的扩展

- [对象的扩展](https://wangdoc.com/es6/object.html)
- `CommonJS` 模块输出一组变量，就非常合适使用简洁写法

```js
module.exports = { getItem, setItem, clear };
```

- 简洁写法在打印对象时也很有用。

```js
console.log({ user, foo });
// {user: {name: "test"}, foo: {bar: "baz"}}
```

---

- 注意，简写的对象方法`不能用作构造函数`，会报错。

```
const obj = {
  f() {
    this.foo = 'bar';
  }
};
new obj.f() // 报错
```

- ES6 can 是用表达式作为属性名

```js
obj['a' + 'bc'] = 123;
```

---

### Set 和 Map 数据结构

- [Set 和 Map 数据结构](https://es6.ruanyifeng.com/#docs/set-map)
- 向 `Set` 加入值的时候，不会发生类型转换，所以 5 和"5"是两个不同的值。
- `Set` 内部判断两个值是否不同，使用的算法叫做`“Same-value-zero equality”`，它类似于精确相等运算符（===），主要的区别是向 Set 加入值时认为 NaN 等于自身，而精确相等运算符认为 NaN 不等于自身。
- 另外，两个对象总是不相等的

---

### Set 实例的属性和方法

- Set 结构的实例有以下属性。
  - `Set.prototype.constructor`：构造函数，默认就是 Set 函数。
  - `Set.prototype.size`：返回 Set 实例的成员总数。
- 四个操作方法。
  - `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
  - `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
  - `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为 Set 的成员。
  - `Set.prototype.clear()`：清除所有成员，没有返回值。

---

- `Array.from`方法可以将 Set 结构转为数组. 这就提供了去除数组重复成员的另一种方法.
- 扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。

```js
function removeDuplicate(array) {
  return Array.from(new Set(array));
}
removeDuplicate([1, 1, 2, 3]); // [1, 2, 3]

let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]; // [3, 5, 2]
```

---

- Set 结构的实例有四个遍历方法，可以用于遍历成员。

  - `Set.prototype.keys()`：返回键名的遍历器
  - `Set.prototype.values()`：返回键值的遍历器
  - `Set.prototype.entries()`：返回键值对的遍历器
  - `Set.prototype.forEach()`：使用回调函数遍历每个成员

- 需要特别指出的是，Set 的遍历顺序就是`插入顺序`。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用
- 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以 `keys` 方法和 `values` 方法的行为完全一致。

---

- Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的 values 方法。这意味着，可以省略 values 方法，直接用 for...of 循环遍历 Set。
- Set 结构的实例与数组一样，也拥有 forEach 方法，用于对每个成员执行某种操作，没有返回值。forEach 方法还可以有第二个参数，表示绑定处理函数内部的 this 对象

```js
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value));
// 1 : 1
// 4 : 4
// 9 : 9
```

---

- 因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）

```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]); // Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter((x) => b.has(x))); // set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter((x) => !b.has(x))); // Set {1}
```

---

- 如果想在遍历操作中，同步改变原来的 `Set` 结构，目前没有直接的方法，但有两种变通方法。一种是利用原 `Set` 结构映射出一个新的结构，然后赋值给原来的 `Set` 结构；另一种是利用 `Array.from` 方法。

```js
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map((val) => val * 2)); // set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, (val) => val * 2)); // set的值是2, 4, 6
```

---

### WeakSet

- `WeakSet 不可遍历`.
- `WeakSet` 的成员只能是对象，而不能是其他类型的值。
- `WeakSet` 中的对象都是弱引用，即垃圾回收机制不考虑 `WeakSet` 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
- 因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为 0，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。`WeakSet` 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。
- 因此，`WeakSet` 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

---

- `WeakSet` 的一个用处，是储存 `DOM` 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

---

### Map vs Object

- JavaScript 的对象（`Object`），本质上是键值对的集合（`Hash` 结构），但是`传统上只能用字符串当作键`。这给它的使用带来了很大的限制。
- Map 数据结构, 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
- `Object` 结构提供了“字符串—值”的对应，`Map` 结构提供了“值—值”的对应，是一种更完善的 `Hash` 结构实现。如果你需要“键值对”的数据结构，`Map` 比 `Object` 更合适。

---

- Map 构造函数接受数组作为参数，实际上执行的是下面的算法。

```js
const items = [
  ['name', 'xing'],
  ['title', 'Author'],
];

const map = new Map();

items.forEach(([key, value]) => map.set(key, value));
```

---

- `Map` 的键实际上是跟`内存地址绑定的`，只要内存地址不一样，就视为两个键。
- 如果 `Map` 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，`Map` 将其视为一个键，比如`0`和`-0`就是一个键，布尔值`true`和字符串`true`则是两个不同的键。另外，`undefined`和`null`也是两个不同的键。虽然`NaN`不严格相等于自身，但 `Map` 将其视为同一个键。
- 事实上，不仅仅是数组，任何具有 `Iterator` 接口、且每个成员都是一个双元素的数组的数据结构都可以当作`Map`构造函数的参数。这就是说，`Set`和`Map`都可以用来生成新的 `Map`。

---

- `size`属性返回 `Map` 结构的成员总数
- `Map.prototype.set(key, value)`

```js
const m = new Map();

m.set('edition', 6); // 键是字符串
m.set(262, 'standard'); // 键是数值
m.set(undefined, 'nah'); // 键是 undefined
```

- set 方法返回的是当前的 Map 对象，因此可以采用链式写法。

```js
let map = new Map().set(1, 'a').set(2, 'b').set(3, 'c');
```

---

- `Map.prototype.get(key)` : `get`方法读取`key`对应的键值，如果找不到 key，返回`undefined`。
- `Map.prototype.has(key)` : `has`方法返回一个布尔值，表示某个键是否在当前 `Map` 对象之中。
- `Map.prototype.delete(key)` : `delete`方法删除某个键，返回`true`。如果删除失败，返回`false`
- `Map.prototype.clear()` : `clear`方法清除所有成员，没有返回值

---

- `Map` 结构的默认遍历器接口（`Symbol.iterator`属性），就是`entries`方法。
- `Map` 结构原生提供三个遍历器生成函数和一个遍历方法。
  - `Map.prototype.keys()`：返回键名的遍历器。
  - `Map.prototype.values()`：返回键值的遍历器。
  - `Map.prototype.entries()`：返回所有成员的遍历器。
  - `Map.prototype.forEach()`：遍历 Map 的所有成员

---

- `Map` 转为数组最方便的方法，就是使用扩展运算符`（...）`
- `Map` 转为 `JSON` 要区分两种情况。
  - 一种情况是，`Map` 的键名都是字符串，这时可以选择转为对象 `JSON`。
  - 另一种情况是，`Map` 的键名有非字符串，这时可以选择转为数组 `JSON`。
- `JSON` 转为 `Map`，正常情况下，所有键名都是字符串。

```js
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}
```

---

### WeakMap

- `WeakMap`与`Map`的区别有两点
  - `WeakMap`只接受对象作为键名（`null除外`），不接受其他类型的值作为键名。如果将数值`1`和`Symbol`值作为 `WeakMap` 的键名，都会报错.
  - `WeakMap` 的键名所指向的对象，不计入垃圾回收机制

---

- `WeakMap` 应用的典型场合就是 `DOM` 节点作为键名。下面是一个例子。

```js
let myWeakmap = new WeakMap();
myWeakmap.set(document.getElementById('logo'), { timesClicked: 0 });
document.getElementById('logo').addEventListener(
  'click',
  function () {
    let logoData = myWeakmap.get(document.getElementById('logo'));
    logoData.timesClicked++;
  },
  false
);
```

- 上面代码中，`document.getElementById('logo')`是一个 `DOM` 节点，每当发生`click`事件，就更新一下状态。我们将这个状态作为键值放在 `WeakMap` 里，对应的键名就是这个节点对象。一旦这个 `DOM` 节点删除，该状态就会自动消失，不存在内存泄漏风险。
