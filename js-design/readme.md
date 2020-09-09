---
marp: true
theme: default
header: 'Js Design'
footer: 'by Xing'
paginate: true
size: 16:9
---

<!--
_backgroundColor: white
_color: black
-->

### JS Design

- https://www.youtube.com/watch?v=XFU0KgoV2NE&list=PL9nxfq1tlKKkfCNnYKoC2yvSy4jo1AsoD&index=2

---

### project init

- install nodejs
- npm init --y
- touch .gitignore
- mkdir src
- touch src/index.js
- touch index.html
- inside html `type "!" (exclamation mark) and press enter in vs code.`
- touch webpack.dev.config.js
- npm install webpack webpack-cli --save-dev
- npm install webpack-dev-server html-webpack-plugin --save-dev

---

### modify package.json

```json
"scripts": {
    "dev": "webpack --config ./webpack.dev.config.js --mode development"
  },
```
