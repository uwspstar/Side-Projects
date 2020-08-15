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