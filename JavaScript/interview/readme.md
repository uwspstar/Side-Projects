- https://wangdoc.com/javascript/basic/grammar.html
### basic operation
- hoisting

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
- JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”（block）。 
- 对于var命令来说，JavaScript 的区块不构成单独的作用域（scope）。
- 每个case代码块内部的break语句不能少，否则会接下去执行下一个case代码块，而不是跳出switch结构。
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