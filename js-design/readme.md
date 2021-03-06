---
marp: true
theme: default
header: 'Javascript 设计模式系统讲解与应用'
footer: 'https://www.youtube.com/watch?v=7FjsHBSxLjE&list=PL9nxfq1tlKKkfCNnYKoC2yvSy4jo1AsoD'
paginate: true
size: 16:9
---

<!--
_backgroundColor: white
_color: black
-->

### Javascript 设计模式系统讲解与应用 2010-10-11

- https://www.youtube.com/watch?v=XFU0KgoV2NE&list=PL9nxfq1tlKKkfCNnYKoC2yvSy4jo1AsoD&index=2
- https://www.youtube.com/watch?v=7FjsHBSxLjE&list=PL9nxfq1tlKKkfCNnYKoC2yvSy4jo1AsoD
- 23 design patten

---

![65% bg brightness:0.9](keypoints.png)

---

### Object

- environment
- object
- UML

### Environment Init

- install nodejs environment
- install webpack
- install webpack-dev-server
- install babel

---

### Project Init

- `npm -v`
- `install nodejs`
- `npm init --y`
- `touch .gitignore`
- `mkdir src`
- `touch src/index.js`
- `touch index.html`
- inside html `type "!" (exclamation mark) and press enter in vs code.`

---

### Install Webpack

- `touch webpack.dev.config.js`
- `npm install webpack webpack-cli --save-dev`
- `npm install webpack-dev-server html-webpack-plugin --save-dev`

---

### install babel

- `npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev`
- `npm install --save-dev babel-core babel-preset-env`
- `touch .babelrc`

---

### modify package.json

```json
"scripts": {
    "dev": "webpack --config ./webpack.dev.config.js --mode development"
  },
```

---

### 面向对象 Object Oriented Programming (2020-11-17) A-PIE

- `Abstraction`
- `Polymorphism`
- `Inheritance`
- `Encapsulation`

---

### Inheritance

- `super` inside `constructor`

```js
class Student extends People {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
}
```

---

### 应用举例 (2020-11-28)

- `jQuery` is a `class`

---

```js
class jQuery {
  constructor(selector) {
    let slice = Array.prototype.slice;
    let dom = slice.call(document.querySelectorAll(selector));
    let len = dom ? dom.length : 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || '';
  }
  append(node) {}
  addClass(name) {}
  html(data) {}
  //more APIs
}
windows.$ = function (selector) {
  return new jQuery(selector);
};
```
