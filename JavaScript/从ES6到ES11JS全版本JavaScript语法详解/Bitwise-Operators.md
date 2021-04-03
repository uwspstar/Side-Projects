---
marp: true
theme: default
header: '从ES6到ES11JS全版本JavaScript语法详解'
footer: 'study note by Xing, source https://wangdoc.com/javascript/operators/bit.html'
paginate: true
size: 16:9
---

# 二进制位运算符

- https://wangdoc.com/javascript/operators/bit.html
- 好处是速度极快，缺点是很不直观
- 位运算符只对整数起作用，如果一个运算子不是整数，会自动转为整数后再执行
- 虽然在 JavaScript 内部，数值都是以 `64` 位浮点数的形式储存，但是做位运算的时候，是以 `32` 位带符号的整数进行运算的，并且返回值也是一个 `32` 位带符号的整数

---

- 任意数值转为 `32` 位`整数`。

```js
function toInt32(x) {
  return x | 0;
}
```

---

### 开关作用

- https://wangdoc.com/javascript/operators/bit.html#%E5%BC%80%E5%85%B3%E4%BD%9C%E7%94%A8
