---
marp: true
theme: default
header: "deallp.com"
footer: "http://deallp.com"
paginate: true
size: 16:9
---

# Deallp

- http://deallp.com/

---

### Angular Init

- $ [sudo] npm install -g npm

```js
Unexpected end of JSON input while parsing near '...-parser","version":"0'
```

- $ `sudo npm uninstall -g angular-cli @angular/cli`
- $ `sudo npm cache clean --force`
- $ `npm cache verify`
- $ `sudo npm install -g @angular/cli`
- $ `ng --version`

---

### npm install package

- $ npm install jquery --save
- $ npm install bootstrap --save
- check `dependencies` in `package.json`
- $ npm install @types/jquery --save-dev
- $ npm install @types/bootstrap --save-dev

---

### include into project @angular.json

- Open the `angular.json` :
- may need to Open `vscode` `settings.json` to setup `"files.exclude":["node_modules": false]`

```js
// architect->build->
"styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.css"
],
"scripts": [
    "./node_modules/jquery/dist/jquery.js",
    "./node_modules/bootstrap/dist/js/bootstrap.js"
]
```

---

### Other Basic

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

### Development server

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

### Code scaffolding

- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

---

### Running unit tests

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### angular cli basic

- $ `ng generate component xyz`
- $ `ng add @angular/material`
- $ `ng add @angular/pwa`
- $ `ng add _____`
- $ `ng test`
- $ `ng build --prod`

### links
- http://placehold.it/800x300