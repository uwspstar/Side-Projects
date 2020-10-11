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

### Javascript 设计模式系统讲解与应用

- https://www.youtube.com/watch?v=XFU0KgoV2NE&list=PL9nxfq1tlKKkfCNnYKoC2yvSy4jo1AsoD&index=2
- https://www.youtube.com/watch?v=7FjsHBSxLjE&list=PL9nxfq1tlKKkfCNnYKoC2yvSy4jo1AsoD

---

![75% bg brightness:0.9](keypoints.png)

---

### project init

- install nodejs
- npm init --y
- touch .gitignore
- mkdir src
- touch src/index.js
- touch index.html
- inside html `type "!" (exclamation mark) and press enter in vs code.`

---

### install webpack

- touch webpack.dev.config.js
- npm install webpack webpack-cli --save-dev
- npm install webpack-dev-server html-webpack-plugin --save-dev

---

### install babel

- npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev
- npm install --save-dev babel-core babel-preset-env
- touch .babelrc

---

### modify package.json

```json
"scripts": {
    "dev": "webpack --config ./webpack.dev.config.js --mode development"
  },
```
