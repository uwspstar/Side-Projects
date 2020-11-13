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

---

### Babel

- use the `Babel REPL` to check what ES6 code compiles to.
- https://babeljs.io/repl/

---

### React.Component

- A component takes in parameters, called `props` (short for “properties”), and returns a hierarchy of views to display via the `render method`.
- `props`
- `render`
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
