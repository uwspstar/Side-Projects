---
marp: true
theme: default
header: 'JavaScript语法详解'
footer: 'study note by Xing, source https://wangdoc.com/'
paginate: true
size: 16:9
---

- https://wangdoc.com/javascript/index.html
- https://wangdoc.com/

---

### hoisting

```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

---

### basic operation

- `n --> 0`

```js
function countdown(n) {
  while (n-- > 0) console.log(n);
}
countdown(3);
// 2
// 1
// 0
```

- 上面代码中，n --> 0 实际上会当作 n-- > 0，因此输出 2、1、0。

---

### JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”（block）。

- 对于 var 命令来说，JavaScript 的区块不构成单独的作用域（scope）。
- 每个 case 代码块内部的 break 语句不能少，否则会接下去执行下一个 case 代码块，而不是跳出 switch 结构。

---

```js
var x = 1;

switch (x) {
  case 1:
    console.log('x 等于 1');
  case 2:
    console.log('x 等于 2');
  case 3:
  case 4:
  default:
    console.log('x 等于其他值');
}
// x 等于 1
// x 等于 2
// x 等于其他值
```

---

### 需要注意的是，switch 语句后面的表达式，与 case 语句后面的表示式比较运行结果时，采用的是严格相等运算符（===），而不是相等运算符（==），这意味着比较时不会发生类型转换。

```js
var x = 1;

switch (x) {
  case true:
    console.log('x 发生类型转换');
    break;
  default:
    console.log('x 没有发生类型转换');
}
// x 没有发生类型转换
```

---

### JavaScript 的数据类型，共有六种。ES6 又新增了第七种 Symbol 类型的值 (SUN SO NB)

- `SUN SO NB`
- 数值（number）：整数和小数（比如 1 和 3.14）
- 字符串（string）：文本（比如 Hello World）。
- 布尔值（boolean）：表示真伪的两个特殊值，即 true（真）和 false（假）
- undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
- null：表示空值，即此处的值为空。
- 对象（object）：各种值组成的集合

---

### 对象是最复杂的数据类型，又可以分成三个子类型。

- 狭义的对象（object）
- 数组（array）
- 函数（function）
- class

---

### 7 Primitive Types ( void, sun, nsb : avoid sun new SB)

- void
- symbol
- undefined
- null
- number
- string
- boolean

---

### 4 Object Types (coa f : sounds like cough)

- functions
- arrays
- classes
- objects

---

### typeof 运算符可以返回一个值的数据类型

```js
typeof undefined; // "undefined"

function f() {}
typeof f; // "function"
```

---

### typeof 可以用来检查一个没有声明的变量，而不报错。

```js
v; // ReferenceError: v is not defined
typeof v; // undefined
```

---

- 上面代码中，变量 `v` 没有用 `var` 命令声明，直接使用就会报错。但是，放在 `typeof` 后面，就不报错了，而是返回 `undefined`。

```js
// 错误的写法
if (v) {
  // ...
} // ReferenceError: v is not defined

// 正确的写法
if (typeof v === 'undefined') {
  // ...
}
```

---

### 对象返回 object, null 返回 object。null 的类型是 object，这是由于历史原因造成的。顺便提一下，instanceof 运算符可以区分数组和对象

```js
typeof window; // "object"
typeof {}; // "object"
typeof []; // "object"
typeof null; // "object"
```

- Empty `Array`（[]）的类型也是 `object`，这表示在 `JavaScript` 内部 `Array` 本质上只是一种特殊的对象。这里顺便提一下，1instanceof1 运算符可以区分`Array` 和 `object`

```js
var o = {};
var a = [];

o instanceof Array; // false
a instanceof Array; // true
```

---

### 区别 null and undefined (undefined == null // true)

- 区别是这样的：`null`是一个表示“空”的对象，转为数值时为`0`；
- `undefined`是一个表示"此处无定义"的原始值，转为数值时为`NaN`。

```js
Number(null); // 0
5 + null; // 5

Number(undefined); // NaN
5 + undefined; // NaN

if (!undefined) {
  console.log('undefined is false');
} // undefined is false

if (!null) {
  console.log('null is false');
} // null is false

undefined == null; // true
```

---

### 函数没有返回值时，默认返回 undefined

```js
function f() {}
f(); // undefined returned
```

---

### 如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为 false，其他值都视为 true。

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""`或`''`（空字符串) // `" "` and `' '` different

---

### JavaScript 内部，所有数字都是以 64 位浮点数形式储存. 这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64 位浮点数）。

### 容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把 64 位浮点数，转成 32 位整数，然后再进行运算.

- `1 === 1.0 // true`

```js
0.1 + 0.2 === 0.3; // false

0.3 / 0.1; // 2.9999999999999996

0.3 - 0.2 === 0.2 - 0.1; // false
```

---

### 精度最多只能到 53 个二进制位，这意味着，绝对值小于 2 的 53 次方的整数，即-2^53 到 2^53，都可以精确表示.

### 由于 2 的 53 次方是一个 16 位的十进制数值，所以简单的法则就是,JavaScript 对 15 位的十进制数都可以精确处理。

---

### JavaScript 能够表示的数值范围为 2^1024 到 2^-1023（开区间），超出这个范围的数无法表示。

```js
Math.pow(2, 53); // 9007199254740992

// 多出的三个有效数字，将无法保存
9007199254740992111; // 9007199254740992000
```

---

### JavaScript 提供 Number 对象的 MAX_VALUE 和 MIN_VALUE 属性，返回可以表示的具体的最大值和最小值。

```js
Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; // 5e-324
// 小数点后紧跟 5 个以上的零，就自动转为科学计数法
```

---

### JavaScript 对整数提供 4 种进制的表示方法：十进制、十六进制、八进制、二进制

- 十进制：没有前导 `0` 的数值。
- 八进制：有前缀 `0o` 或 `0O` 的数值，或者有前导 `0`、且只用到 `0-7 `的八个阿拉伯数字的数值。
- - 十六进制：有前缀 `0x` 或 `0X` 的数值。
    二进制：有前缀 `0b` 或 `0B` 的数值。

```js
0xff // 255
0o377 // 255
0b11 // 3

0xzz // 报错
0o88 // 报错
0b22 // 报错

```

---

### JavaScript 内部实际上存在 2 个 0：一个是 +0，一个是 -0，区别就是 64 位浮点数表示法的符号位不同。它们是等价的。

- 存在 2 个 `0` : `Object.is(-0,+0) //false`
- 几乎所有场合，正零和负零都会被当作正常的 `0`。
- 唯一有区别的场合是，`+0` 或`-0` 当作分母，返回的值是不相等的。

---

```js
-0 === +0; // true
0 === -0; // true
0 === +0; // true
```

```js
+0; // 0
-0; // 0
(-0).toString(); // '0'
(+0).toString(); // '0'
```

---

- 除以`+0`得到`+Infinity`，除以`-0`得到`-Infinity`，这两者是`!==`的

```js
1 / +0 === 1 / -0; // false
```

---

### Infinity 与 NaN 比较，总是返回 false

```js
Infinity > NaN; // false
-Infinity > NaN; // false

Infinity < NaN; // false
-Infinity < NaN; // false
```

### NaN

```js
5 - 'x'; // NaN
NaN === NaN; // false
[NaN].indexOf(NaN); // -1
Boolean(NaN); // false

// 场景一
Math.pow(2, 1024); // Infinity

// 场景二
0 / 0; // NaN
1 / 0; // Infinity
```

---

### parseInt 方法用于将字符串转为整数

### parseInt 的返回值只有两种可能，要么是一个十进制整数，要么是 NaN

### parseInt 的第二个参数为 10，即默认是十进制转十进制. 这个整数只有在 2 到 36 之间，才能得到有意义的结果，超出这个范围，则返回 NaN。

### 如果第二个参数是 0、undefined 和 null，则直接忽略。

---

### parseInt 用于将字符串转为整数, 字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分.

```js
parseInt(011, 2); // NaN

// 等同于
parseInt(String(011), 2);

// 等同于
parseInt(String(9), 2);

// 第一行的 011 会被先转为字符串 9，因为 9 不是二进制的有效字符，所以返回 NaN。
// 如果直接计算 parseInt('011', 2)，011 则是会被当作二进制处理，返回 3
```

---

### parseFloat 方法用于将一个字符串转为浮点数. parseFloat 方法会自动过滤字符串前导的空格

### parseFloat 会将空字符串转为 NaN。这些特点使得 parseFloat 的转换结果不同于 Number 函数

```js
parseFloat(true); // NaN
Number(true); // 1

parseFloat(null); // NaN
Number(null); // 0

parseFloat(''); // NaN
Number(''); // 0

parseFloat('123.45#'); // 123.45
Number('123.45#'); // NaN
```

---

### isNaN 方法可以用来判断一个值是否为 NaN

### isNaN 只对数值有效，如果传入其他值，会被先转成数值。比如，传入字符串的时候，字符串会被先转成 NaN，所以最后返回 true，这一点要特别引起注意。也就是说，isNaN 为 true 的值，有可能不是 NaN，而是一个字符串。

```js
isNaN('Hello'); // true
// 相当于
isNaN(Number('Hello')); // true
```

---

### isNaN 对于对象和数组，isNaN 也返回 true

### isNaN 对于空数组和只有一个数值成员的数组，isNaN 返回 false

### isNaN 使用 isNaN 之前，最好判断一下数据类型。

```js
function myIsNaN(value) {
  return typeof value === 'number' && isNaN(value);
}
```

---

### NaN 判断 NaN 更可靠的方法是，利用 NaN 为唯一不等于自身的值的这个特点，进行判断

```js
function myIsNaN(value) {
  return value !== value;
}

const checkIsNaN = (val) => val !== val;
```

---

### isFinite 方法返回一个布尔值，表示某个值是否为正常的数值

```js
isFinite(Infinity); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
isFinite(undefined); // false
isFinite(null); // true
isFinite(-1); // true
```

---

### string 默认只能写在一行内，分成多行将会报错. 如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠

### \uXXXX

### \u 后面紧跟四个十六进制数（0000 到 FFFF），代表一个字符。XXXX 对应该字符的 Unicode 码点，比如 \u00A9 表示版权符号。

---

### 字符串可以被视为字符数组，因此可以使用数组的方括号运算符, 如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回 undefined

### 无法改变字符串之中的单个字符. 字符串内部的单个字符无法改变和增删，这些操作会默默地失败. length 属性返回字符串的长度，该属性也是无法改变的, 但是不会报错。

---

```js
var s = 'hello';

delete s[0];
s; // "hello"

s[1] = 'a';
s; // "hello"

s[5] = '!';
s; // "hello"

s.length = 3;
s.length; // 5
```

---

### JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示. JavaScript 不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，即将字符写成 \uxxxx 的形式，其中 xxxx 代表该字符的 Unicode 码点。比如，\u00A9 代表版权符号。

```js
var s = '\u00A9';
s; // "©"
```

---

### Unicode 解析代码的时候，JavaScript 会自动识别一个字符是字面形式表示，还是 Unicode 形式表示。输出给用户的时候，所有字符都会转成字面形式。

```js
var foo = 'abc';
foo; // "abc"
```

---

### UTF-16 每个字符在 JavaScript 内部都是以 16 位（即 2 个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为 16 位长度，即 2 个字节。

---

### 对于码点在 U+10000 到 U+10FFFF 之间的字符，JavaScript 总是认为它们是两个字符（length 属性为 2）。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。

---

### Base64 就是一种编码方法，可以将任意值转成 0 ～ 9、A ～ Z、a-z、+和/这 64 个字符组成的可打印字符。

--

### Base64 使用的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

### JavaScript 原生提供两个 Base64 相关的方法。

```js
btoa(); //：任意值转为 Base64 编码
atob(); //：Base64 编码转为原来的值
```

---

### '𝌆'.length // 2 JavaScript 认为 𝌆 的长度为 2，而不是 1

- https://wangdoc.com/javascript/types/string.html

---

### 有时，文本里面包含一些不可打印的符号，比如 ASCII 码 0 到 31 的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

### 所谓 Base64 就是一种编码方法，可以将任意值转成 0 ～ 9、A ～ Z、a-z、+和/这 64 个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理

---

### Object : ES6 又引入了 Symbol 值也可以作为键名

### 如果键名是数值，会被自动转为字符串。

### 如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。

### 对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。

```js
var obj = {
  p: function (x) {return 2 \* x;}
};
obj.p(1) // 2
```

---

### 如果属性的值还是一个对象，就形成了链式引用

### 对象的属性之间用逗号分隔，最后一个属性后面可以加逗号（trailing comma），也可以不加

### 如果行首是一个大括号，它到底是表达式还是语句？ 为了避免这种歧义，JavaScript 引擎的做法是，如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。

```js
{
  console.log(123);
} // 123 上面的语句是一个代码块，而且只有解释为代码块，才能执行。
```

---

### 如果要解释为对象，最好在大括号前加上圆括号。因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。

```js

({ foo: 123 }) // 正确
({ console.log(123) }) // 报错
//这种差异在 eval 语句（作用是对字符串求值）中反映得最明显。

eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}
//上面代码中，如果没有圆括号，eval 将其理解为一个代码块；加上圆括号以后，就理解成一个对象。

```

---

### 如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理. 数字键可以不加引号，因为会自动转成字符串。注意，数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。

```js
// 如果使用点运算符，foo 就是字符串；如果使用方括号运算符，但是不使用引号，那么 foo 就是一个变量，指向字符串 bar。

var foo = 'bar';

var obj = {
  foo: 1,
  bar: 2,
};

obj.foo; // 1
obj[foo]; // 2
```

---

### 查看一个对象本身的所有属性，可以使用 Object.keys 方法。

```js
var obj = {
  key1: 1,
  key2: 2,
};

Object.keys(obj);
// ['key1', 'key2']
```

### delete 命令用于删除对象的属性，删除成功后返回 true。

```

var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []
上面代码中，delete 命令删除对象 obj 的 p 属性。删除后，再读取 p 属性就会返回 undefined，而且 Object.keys 方法的返回值也不再包括该属性。

```

### 不能根据 delete 命令的结果，认定某个属性是存在的。

### 注意，删除一个不存在的属性，delete 不报错，而且返回 true。

### 只有一种情况，delete 命令会返回 false，那就是该属性存在，且不得删除。

```

var obj = {};
delete obj.p // true

```

### 需要注意的是，delete 命令只能删除对象本身的属性，无法删除继承的属性

```

var obj = {};
delete obj.toString // true
obj.toString // function toString() { [native code] }
上面代码中，toString 是对象 obj 继承的属性，虽然 delete 命令返回 true，但该属性并没有被删除，依然存在。这个例子还说明，即使 delete 返回 true，该属性依然可能读取到值。

```

### in 运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值）

```

var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true

```

### in 运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。就像上面代码中，对象 obj 本身并没有 toString 属性，但是 in 运算符会返回 true，因为这个属性是继承的。

### 这时 hasOwnProperty，可以使用对象的 hasOwnProperty 方法判断一下，是否为对象自身的属性。

```

var obj = {};
if ('toString' in obj) {
console.log(obj.hasOwnProperty('toString')) // false
}

```

### for...in 循环用来遍历一个对象的全部属性. 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。它不仅遍历对象自身的属性，还遍历继承的属性

```

var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
console.log('键名：', i);
console.log('键值：', obj[i]);
}

```

### 使用 for...in 的时候，应该结合使用 hasOwnProperty 方法，在循环内部判断一下，某个属性是否为对象自身的属性。

```

var person = { name: '老张' };

for (var key in person) {
if (person.hasOwnProperty(key)) {
console.log(key);
}
}

```

### 三种声明函数的方法

- https://wangdoc.com/javascript/types/function.html

### function 命令

- function 命令声明的代码区块，就是一个函数。function 命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。

```

function print(s) {
console.log(s);
}

```

### 函数表达式

- 除了用 function 命令声明函数，还可以采用变量赋值的写法。

```

var print = function(s) {
console.log(s);
};

```

- 这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。

- 采用函数表达式声明函数时，function 命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

```

var print = function x(){
console.log(typeof x);
};

x
// ReferenceError: x is not defined

print()
// function

```

- 上面代码在函数表达式中，加入了函数名 x。这个 x 只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）。因此，下面的形式声明函数也非常常见。

```

var f = function f() {};
需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号

```

### Function 构造函数, 这种声明函数的方式非常不直观，几乎无人使用。函数的重复声明

- 第三种声明函数的方式是 Function 构造函数。

```

var add = new Function(
'x',
'y',
'return x + y'
);

// 等同于
function add(x, y) {
return x + y;
}

```

### 如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。

### 函数名后面紧跟一对圆括号，就会调用这个函数。

### JavaScript 引擎遇到 return 语句，就直接返回 return 后面的那个表达式的值，后面即使还有语句，也不会得到执行。也就是说，return 语句所带的那个表达式，就是函数的返回值。

### return 语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回 undefined

### JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数

### 函数的 name 属性返回函数的名字。

### name 属性的一个用处，就是获取参数函数的名字

### 函数的 length 属性返回函数预期传入的参数个数，即函数定义之中的参数个数

### 函数作用域

```

```

```

```
