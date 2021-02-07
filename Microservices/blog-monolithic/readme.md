---
marp: true
theme: default
header: 'side projects'
footer: 'side-projects'
paginate: true
size: 16:9
---

### App Init

- mkdir blog
  - cd blog
  - npx create-react-app client
    - cd client
    - npm install axios

---

- mkdir post
  - cd post
  - npm init -y
  - npm install express cors axios nodemon
  - cd ..

---

- mkdir comments
  - cd comments
    - npm init -y
    - npm install express cors axios nodemon
    - cd ..

---

```js
useEffect(() => {
  fetchData();
}, []);
```

- `useEffect` call `fetchData` only once by with second param `[]`
