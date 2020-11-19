---
marp: true
theme: default
header: "AngularTourOfHeroes"
footer: "https://angular.cn/tutorial"
paginate: true
size: 16:9
---

# AngularTourOfHeroes

- [AngularTourOfHeroes](https://angular.cn/tutorial/toh-pt0)

---

### project init

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.
- `ng new angular-tour-of-heroes`
- `cd angular-tour-of-heroes`
- `npm install`
- `ng serve --open` = `ng serve -o`
- `{{title}}` 双花括号语法是 Angular 的插值绑定语法。

---

### component

- `ng generate component heroes`

- 你要从 Angular 核心库中导入 `Component` 符号，并为组件类加上 `@Component` 装饰器。
- `ngOnInit()` 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 `ngOnInit()`。这里是放置初始化逻辑的好地方。
- 始终要 `export` 这个组件类，以便在其它地方（比如 AppModule）导入它
- 要显示 `HeroesComponent` 你必须把它加到壳组件 `AppComponent` 的模板中。
- `app-heroes` 就是 `HeroesComponent` 的 元素选择器. 所以，只要把 `<app-heroes>` 元素添加到 `AppComponent` 的模板文件中就可以了，就放在标题下方。

---

### UppercasePipe

- `<h2>{{hero.name | uppercase}} Details</h2>`

---

### 双向绑定 Two-way binding

- [(ngModel)] 是 Angular 的双向数据绑定语法
- `<input [(ngModel)]="hero.name" placeholder="name"/>`

---

### AppModule

- 有些元数据位于 `@Component` 装饰器中，你会把它加到组件类上。 另一些关键性的元数据位于 `@NgModule` 装饰器中。

- 最重要的 `@NgModule` 装饰器位于顶层类 `AppModule` 上

---

### 声明 HeroesComponent

- 每个组件都必须声明在（且只能声明在）一个 NgModule 中.

```js
import { HeroesComponent } from './heroes/heroes.component';

declarations: [
  AppComponent,
  HeroesComponent
],
```

---

### 使用 \*ngFor

- 不要忘了 `ngFor` 前面的星号 `（*）`，它是该语法中的关键部分。

---

### 添加 click 事件绑定

- `<li *ngFor="let hero of heroes" (click)="onSelect(hero)">`
- `click` 外面的圆括号会让 Angular 监听这个 <li> 元素的 `click` 事件。 当用户点击 <li> 时，Angular 就会执行表达式 `onSelect(hero)`。

- 下一部分，会在 `HeroesComponent` 上定义一个 `onSelect()` 方法，用来显示 `*ngFor` 表达式所定义的那个英雄（hero）。

---

### 修复 —— 使用 \*ngIf 隐藏空白的详情

- 不要忘了 `ngIf` 前面的星号`（*）`，它是该语法中的关键部分。
- 当应用启动时，selectedHero 是 undefined，设计如此。
- `<div *ngIf="hero">`

---

### 主从组件

- 把所有特性都放在同一个组件中，将会使应用“长大”后变得不可维护。 你要把大型组件拆分成小一点的子组件，每个子组件都要集中精力处理某个特定的任务或工作流

---

### 添加 @Input() hero 属性

```js
import { Component, OnInit, Input } from "@angular/core";
```

```js
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

- 这两个组件将会具有父子关系。 当用户从列表中选择了某个英雄时，父组件 HeroesComponent 将通过把要显示的新英雄发送给子组件 HeroDetailComponent，来控制子组件

---

### 单向数据绑定

- `[hero]="selectedHero" 是 Angular 的属性绑定语法`
- 从 HeroesComponent 的 selectedHero 属性绑定到目标元素的 hero 属性，并映射到了 HeroDetailComponent 的 hero 属性。
- 当用户在列表中点击某个英雄时，selectedHero 就改变了。 当 selectedHero 改变时，属性绑定会修改 HeroDetailComponent 的 hero 属性，HeroDetailComponent 就会显示这个新的英雄

---

### Development server

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

### Code scaffolding

- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

---

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

---

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
