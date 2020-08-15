- https://wangdoc.com/javascript/basic/grammar.html
### hoisting
### basic operation
- ```n --> 0```
```
function countdown(n) {
  while (n --> 0) console.log(n);
}
countdown(3)
// 2
// 1
// 0
上面代码中，n --> 0实际上会当作n-- > 0，因此输出2、1、0。
```
### JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”（block）。 
### 对于var命令来说，JavaScript 的区块不构成单独的作用域（scope）。
### 每个case代码块内部的break语句不能少，否则会接下去执行下一个case代码块，而不是跳出switch结构。
```
var x = 1;

switch (x) {
  case 1:
    console.log('x 等于1');
  case 2:
    console.log('x 等于2');
  default:
    console.log('x 等于其他值');
}
// x等于1
// x等于2
// x等于其他值
```
### 需要注意的是，switch语句后面的表达式，与case语句后面的表示式比较运行结果时，采用的是严格相等运算符（===），而不是相等运算符（==），这意味着比较时不会发生类型转换。
```
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
### JavaScript 的数据类型，共有六种。ES6 又新增了第七种 Symbol 类型的值
- 数值（number）：整数和小数（比如1和3.14）
- 字符串（string）：文本（比如Hello World）。
- 布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）
- undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
- null：表示空值，即此处的值为空。
- 对象（object）：各种值组成的集合
### 对象是最复杂的数据类型，又可以分成三个子类型。 
    - 狭义的对象（object）
    - 数组（array）
    - 函数（function）

### typeof运算符可以返回一个值的数据类型
```
typeof undefined // "undefined"

function f() {}
typeof f // "function"

```
### typeof可以用来检查一个没有声明的变量，而不报错。
```
v // ReferenceError: v is not defined
typeof v // undefined

上面代码中，变量v没有用var命令声明，直接使用就会报错。但是，放在typeof后面，就不报错了，而是返回undefined。

// 错误的写法
if (v) {
  // ...
}
// ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") {
  // ...
}
```
### 对象返回object, null返回object。null的类型是object，这是由于历史原因造成的。
```
typeof window // "object"
typeof {} // "object"
typeof [] // "object"
typeof null // "object"

空数组（[]）的类型也是object，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。这里顺便提一下，instanceof 运算符可以区分数组和对象

var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true
```
### 区别 null and undefined (undefined == null // true)
- 区别是这样的：```null```是一个表示“空”的对象，转为数值时为```0```；
- ```undefined```是一个表示"此处无定义"的原始值，转为数值时为```NaN```。

```
Number(null) // 0
5 + null // 5

Number(undefined) // NaN
5 + undefined // NaN

if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true


// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```
### 如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。

- undefined
- null
- false
- 0
- NaN
- ""或''（空字符串)  // "   " and '   ' different
### JavaScript 内部，所有数字都是以64位浮点数形式储存
- ```1 === 1.0 // true```