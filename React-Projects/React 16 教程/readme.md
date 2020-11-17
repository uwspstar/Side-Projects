---
marp: true
theme: default
header: 'React系列课程从零基础到项目开发实战'
footer: 'https://www.youtube.com/watch?v=ZXg4W7qm-uw&list=PL9nxfq1tlKKnza3MPogWqaYIPtdW_G2lF'
paginate: true
size: 16:9
---

# React 16.x 教程 | React 系列课程从零基础到项目开发实战

- React is a declarative, efficient, and flexible `JavaScript library` for building user interfaces
- https://www.youtube.com/watch?v=ZXg4W7qm-uw&list=PL9nxfq1tlKKnza3MPogWqaYIPtdW_G2lF
- https://reactjs.org/tutorial/tutorial.html
- all in js

---

### [目录文件简介](https://www.youtube.com/watch?v=ukXHAqsbu6g&list=PL9nxfq1tlKKnza3MPogWqaYIPtdW_G2lF&index=4)

- `App.js`
- `index.js`
- `logo.svg`
- `registerServiceWorker` : `PWA` progressive web application
- `React.StrictMode`
- `App.test.js`
- `manifest.json` : PWA setting

---

### Babel

- use the `Babel REPL` to check what ES6 code compiles to.
- https://babeljs.io/repl/

---

### project init

- `npm install -g npx`
- `npx create-react-app app-name`
- create a project on firebase [https://console.firebase.google.com/](https://console.firebase.google.com/)
- `npm install @material-ui/core`
- `npm install axios`

---

### [React 中的组件](https://www.youtube.com/watch?v=64b-Rt0CPbc&list=PL9nxfq1tlKKnza3MPogWqaYIPtdW_G2lF&index=5)

```js
import React, {Component} from 'react';
class App extends Component {...}
```

#### same as

```js
import React from 'react';
class App extends React.Component {...}
```

---

```js
import { Component } from 'react';
```

#### same as

```js
import React from 'react';
const Component = React.Component;
```

- `ReactDOM.render`

---

### React.Component

- A component takes in parameters, called `props` (short for “properties”), and returns a hierarchy of views to display via the `render method`.
- `props`
- `render` : function return JSX
- `state`
- `setState`
- Immutability

---

- In JavaScript classes, you need to always call `super` when defining the constructor of a subclass.
- All React component classes that have a constructor should start with a `super(props)` call.

---

### Function Components

- https://reactjs.org/tutorial/tutorial.html#function-components

---

### React Fragments

- Sometimes we break HTML semantics when we add <div> elements to our JSX to make our React code work, especially when working with lists (<ol>, <ul> and <dl>) and the HTML <table>. In these cases we should rather use React `Fragments` to group together multiple elements

### JSX

- Most React developers use a special syntax called “JSX” which makes these structures easier to write.
- The `<div /> syntax` is transformed at `build time` to `React.createElement('div')`.

---

### Developer Tools Chrome

---

### React 中的虚拟 DOM

---

![55% bg brightness:0.9](d1.png)

---

![75% bg brightness:0.9](d2.png)

---
