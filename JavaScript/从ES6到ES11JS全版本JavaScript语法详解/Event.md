---
marp: true
theme: default
header: '从ES6到ES11JS全版本JavaScript语法详解'
footer: 'study note by Xing, source https://wangdoc.com/javascript/events/eventtarget.html'
paginate: true
size: 16:9
---

# Event

- 事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现

---

### EventTarget : DOM 的事件操作（监听和触发），都定义在 EventTarget 接口

```js
target.addEventListener(type, listener[, useCapture]);
```
