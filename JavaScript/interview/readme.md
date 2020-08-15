- https://wangdoc.com/javascript/index.html

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
  case 3:
  case 4:
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
### JavaScript 内部，所有数字都是以64位浮点数形式储存. 这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把64位浮点数，转成32位整数，然后再进行运算.
- ```1 === 1.0 // true```
```
0.1 + 0.2 === 0.3
// false

0.3 / 0.1
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1)
// false
```
### 精度最多只能到53个二进制位，这意味着，绝对值小于2的53次方的整数，即-253到253，都可以精确表示. 由于2的53次方是一个16位的十进制数值，所以简单的法则就是，JavaScript 对15位的十进制数都可以精确处理。则 JavaScript 能够表示的数值范围为2^1024到2^-1023（开区间），超出这个范围的数无法表示。
```
Math.pow(2, 53) // 9007199254740992

// 多出的三个有效数字，将无法保存
9007199254740992111 // 9007199254740992000
```
### JavaScript 提供Number对象的MAX_VALUE和MIN_VALUE属性，返回可以表示的具体的最大值和最小值。
```
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324

// 小数点后紧跟5个以上的零，
// 就自动转为科学计数法
```

### JavaScript 对整数提供四种进制的表示方法：十进制、十六进制、八进制、二进制
```
十进制：没有前导0的数值。
八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
十六进制：有前缀0x或0X的数值。
二进制：有前缀0b或0B的数值。

0xff // 255
0o377 // 255
0b11 // 3

0xzz // 报错
0o88 // 报错
0b22 // 报错
```
### JavaScript 内部实际上存在2个0：一个是+0，一个是-0，区别就是64位浮点数表示法的符号位不同。它们是等价的。
```
-0 === +0 // true
0 === -0 // true
0 === +0 // true
```
- 几乎所有场合，正零和负零都会被当作正常的0。
```
+0 // 0
-0 // 0
(-0).toString() // '0'
(+0).toString() // '0'
```
- 唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的。
```
(1 / +0) === (1 / -0) // false
除以正零得到+Infinity，除以负零得到-Infinity，这两者是不相等的
```
### NaN
```
5 - 'x' // NaN
NaN === NaN // false
[NaN].indexOf(NaN) // -1
Boolean(NaN) // false

// 场景一
Math.pow(2, 1024) // Infinity

// 场景二
0 / 0 // NaN
1 / 0 // Infinity
```