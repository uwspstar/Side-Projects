---
marp: true
theme: default
header: 'JavaScript 教程'
footer: 'by Xing'
paginate: true
size: 16:9
---

# JavaScript 教程

- https://wangdoc.com/javascript/index.html
- JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数

---

### 3 ways 函数的声明

- 1. function 命令
- 2. 函数表达式 - 采用函数表达式声明函数时，function 命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。
- 3. Function 构造函数
- 如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。

---

### 调用函数时，要使用圆括号运算符. 函数名后面紧跟一对圆括号，就会调用这个函数

- 函数可以调用自身，这就是递归（recursion）

---

### 函数为第一等公民

- 函数与其他数据类型地位平等

```js
function add(x, y) {
  return x + y;
}

// 将函数赋值给一个变量
var operator = add;

// 将函数作为参数和返回值
function a(op) {
  return op;
}
a(add)(1, 1);
```

---

### 函数名的提升

- JavaScript 引擎将函数名视同变量名，所以采用 function 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。

```js
f();

function f() {}
```

- 但是，如果采用赋值语句定义函数，JavaScript 就会报错。

```js
f();
var f = function () {};
// TypeError: undefined is not a function
```
