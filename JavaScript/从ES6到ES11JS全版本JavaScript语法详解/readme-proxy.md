---
marp: true
theme: default
header: '从ES6到ES11JS全版本JavaScript语法详解'
footer: 'study note by Xing, source https://www.youtube.com/watch?v=uTYkUfniMeo&list=PL9nxfq1tlKKn96qqvz92I-09Qg21F12c2'
paginate: true
size: 16:9
---

# 从 ES6 到 ES11JS 全版本 JavaScript 语法详解

- https://www.youtube.com/watch?v=uTYkUfniMeo&list=PL9nxfq1tlKKn96qqvz92I-09Qg21F12c2
- https://wangdoc.com/es6/

---

### Proxy - ES6

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- With a `Proxy`, you can easily `validate the passed value` for an object. This example uses the set handler.
- A function proxy could easily extend a constructor with a new constructor.
- https://www.youtube.com/watch?v=WQmqCF9a6oA&list=PL9nxfq1tlKKn96qqvz92I-09Qg21F12c2&index=28

---

```js
let arr = [7, 8, 9];
arr = new Proxy(arr, {
  get(target, prop) {
    // console.log(target, prop)
    return prop in target ? target[prop] : 'err';
  },
});

let dict = {
  k1: 'KEY ONE',
  k2: 'KEY TWO',
};
dict = new Proxy(dict, {
  get(target, prop) {
    // console.log(target, prop)
    return prop in target ? target[prop] : prop;
  },
});
console.log(dict['k1']); //KEY ONE
console.log(dict['k10']); //k10
```

---

```js
let user = {
  name: 'xing',
  age: 28,
  _password: '***',
};
user = new Proxy(user, {
  get(target, prop) {
    if (prop.startWith('_')) {
      throw new Error('err');
    } else {
      return targe[prop];
    }
  },
  set(target, prop, val) {
    if (prop.startWith('_')) {
      throw new Error('err');
    } else {
      target[prop] = val;
      return targe[prop];
    }
  },
});
```

---

![75% bg brightness:0.9](p1.png)

---

![75% bg brightness:0.9](p2.png)

---
