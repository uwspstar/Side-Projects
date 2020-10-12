---
marp: true
theme: default
header: 'side projects'
footer: 'side-projects'
paginate: true
size: 16:9
---

# Front-End Interview

---

```js
console.log(+true); //1
console.log(!'xing'); //false
```

---

### reduce

```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));

```

---

### for ... of vs for ...in

```js
{
  const arr = ['name', 'age', 'job'];
  for (let item in arr) {
    console.log(item); // 0 1 2
  }
  for (let item of arr) {
    console.log(item); // name age job
  }
}
```

---

### for ... in loop

```js
{
  let obj = {
    name: 'xing',
    age: 20,
  };
  for (let item in obj) {
    console.log('item', item);
  }
  // item name
  // item age
}
```

---

### 5 windows objects

- Navigator
- Screen
- History
- Location
- Window

---

### checking variable type

- `typeof`
- `instanceof`
- `constructor`

---

### isNaN vs Number.isNaN

```js
{
  const name = 'xing';
  const age = 21;
  console.log(Number.isNaN(name)); //false
  console.log(Number.isNaN(age)); //false

  console.log(isNaN(name)); //true
  console.log(isNaN(age)); //false
}
```

---

![100% bg brightness:0.9](1.png)

---

![100% bg brightness:0.9](2.png)

---

![100% bg brightness:0.9](3.png)

---

![100% bg brightness:0.9](4.png)

---

![100% bg brightness:0.9](5.png)

---

![100% bg brightness:0.9](6.png)

---

![100% bg brightness:0.9](7.png)

---

![100% bg brightness:0.9](8.png)

---

![100% bg brightness:0.9](9.png)

---

![100% bg brightness:0.9](10.png)

---

![100% bg brightness:0.9](11.png)

---

![100% bg brightness:0.9](12.png)

---

![100% bg brightness:0.9](13.png)

---

![100% bg brightness:0.9](14.png)

---

![100% bg brightness:0.9](15.png)

---

![100% bg brightness:0.9](16.png)

---

![100% bg brightness:0.9](17.png)

---

![100% bg brightness:0.9](18.png)

---

![100% bg brightness:0.9](19.png)

---

![100% bg brightness:0.9](20.png)

---

![100% bg brightness:0.9](21.png)

---

![100% bg brightness:0.9](22.png)

---

![100% bg brightness:0.9](23.png)

---

![100% bg brightness:0.9](24.png)

---

![100% bg brightness:0.9](25.png)

---

![100% bg brightness:0.9](26.png)

---

![100% bg brightness:0.9](27.png)

---
