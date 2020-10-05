---
marp: true
theme: default
header: 'Typescript Projects'
footer: 'https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/14504488?start=0#overview'
paginate: true
size: 16:9
---

# typescript

- https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/14504488?start=0#overview

---

### 7 Primitive Types ( void, sun, nsb : avoid sun new SB)

- void
- symbol
- undefined
- null
- number
- string
- boolean

---

### 4 Object Types (coa f : sounds like cough)

- functions
- arrays
- classes
- objects

---

### type annotations

- array

```js
let colors: string[] = ['red', 'green', 'blue'];
let myNums: number[] = [1, 2, 3];
```

--

- classes

```js
class Car {}
let car: Car;
```

---

- Object literal

```js
let point: { x: number, y: number } = {
  x: 10,
  y: 20,
};
```

- function

```js
const logNums: (i: number) => void = (i: number) => {
  console.log(i);
};
```

---

### type annotations vs type inference

- type annotations : developer tell Typescript the type
- type inference : Typescript guess the type

---

### `Any` type

- `avoid with Any type`
- `JSON.parse()` return any type

```js
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
```

---

### variable with different type

- `let myTemp : number | boolean;`

---

### Restricting Access with Interfaces

### public, private, protect

- default is `public`
- private constructor cannot create an instance

---

### abstract

```js

abstract class Play {
  public name:string;
  public abstract sayHi();
}

class Boy extends Play {
  public sayHi(){};
}
```
