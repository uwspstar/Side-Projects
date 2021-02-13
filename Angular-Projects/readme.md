---
marp: true
theme: default
header: 'javascript-web-projects-to-build-your-portfolio-resume'
footer: 'study note by Xing, source https://angular.cn/guide/setup-local'
paginate: true
size: 16:9
---

### Updating npm:

- $ [sudo] npm install -g npm
- (sudo is only required on Mac/ Linux)

---

### Updating the CLI

- $ [sudo] npm uninstall -g angular-cli @angular/cli
- $ npm cache verify
- $ [sudo] npm install -g @angular/cli

---

### others

- e2e : test
- src : code location
- angular.json config angular package, such as jquery
- karma : auto test

---

### run

- ng serve --open

---

### Angular project start

- angular.json

---

### Basic

- `Modules`, `component`s and `services` are classes that use `decorators`. These decorators mark their type and provide metadata that tells Angular how to use them.

---

### component

- `selector`
- `templateUrl` vs `template`
- `stylesUrls` vs `styles`

---

### lifecycle hook

- 可以通过实现一个或多个 Angular core 库中定义的生命周期钩子接口来响应组件或指令生命周期中的事件. 你不必实现所有生命周期钩子，只要实现你需要的那些就可以了。

---

### Angular executes hook methods in the following sequence.

- 你可以用它来执行以下类型的操作。
    - `ngOnChanges()`: 注意，这发生的非常频繁，所以你在这里执行的任何操作都会显著影响性能。
    - `ngOnInit()` : 初始化指令/组件
