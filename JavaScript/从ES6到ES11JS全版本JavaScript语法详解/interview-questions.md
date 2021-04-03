---
marp: true
theme: default
header: 'https://www.interviewbit.com/'
footer: 'study note by Xing, source https://www.interviewbit.com/'
paginate: true
size: 16:9
---

# var vs let vs const

```js
var a = 10;
{
  var a = -10;
}
let b = a;
{
  let b = -20;
}
console.log(b);
```

---

### scope

- `var` declarations are function scoped.
- `let` declarations are block scoped.
- `const` declarations are block scoped.

---

### Hoisting

- `Hoisting` is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
- Variables declared using `var` are hoisted to the top of their `scope` and `initialized` with a value of `undefined`(special type)
- Variables declared using `let` are hoisted to the top of their scope but are not initialized with any value.
- Variables declared using `const` are hoisted to the top of their scope but are not initialized with any value

---

### const

- A variable declared using `const` cannot be redefined or re-declared within its scope.
- Every `const` declaration `must be initialized` at the time of declaration.

---

### let

- A variable declared using `let` can be `redefined` within its scope but `cannot be` `re-declared` within its scope.

---

### var

- A variable declared using `var` can be redefined and even redeclared anywhere throughout its scope.

---
