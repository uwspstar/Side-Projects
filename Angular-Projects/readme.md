---
marp: true
theme: default
header: 'angular'
footer: 'study note by Xing, source https://angular.cn'
paginate: true
size: 16:9
---

### Recommend Links

- https://blog.ralph.wang/
- https://angular.cn/docs
- https://angular.io/cli

### Updating npm:

- $ [sudo] npm install -g npm
- (sudo is only required on Mac/ Linux)

---

### Updating the CLI

```js
Unexpected end of JSON input while parsing near '...-parser","version":"0'
```

- $ `sudo npm uninstall -g angular-cli @angular/cli`
- $ `sudo npm cache clean --force`
- $ `npm cache verify`
- $ `sudo npm install -g @angular/cli`
- $ ng --version

---

### others

- e2e : test
- src : code location
- angular.json config angular package, such as jquery
- karma : auto test

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

### run

- ng serve --open

---

### angular-cli

- https://angular.cn/cli

---

### polyfills

- 每个传统应用通常都会带有自己的 `polyfills` 来抹平浏览器之间的差异

---

### iframe

- `iframe` 是微前端框架下最理想的硬边界

---

### Promise

- `Promise` 的`特点`是无论有没有人关心它的执行结果，它都会立即开始执行，并且`你没有机会取消这次执行`。
- 显然，在某些情况下这么做是浪费的甚至错误的。仍然以电商为例，如果某商户的订单不允许取消，你还会去买吗？
- 如果你发起了一个 `Ajax` 请求，然后用户导航到了另一个路由，显然，你这个请求如果还没有完成就应该被取消，而不应该发出去。但是使用 `Promise`，你做不到，不是因为实现方面的原因，而是因为它在概念层（接口定义上）就无法支持取消。
- 此外，由于 `Promise` 只会承载一个值，因此当我们要处理的是一个集合的时候就比较困难了。比如对于一个随机数列（总数未知），如果我们要借助 `Web API` 检查每个数字的有效性，然后对前一百个有效数字进行求和，那么用 Promise 写就比较麻烦了。

---

### Observable

- `Observable` 顾名思义就是可以被别人观察的对象，当它变化时，观察者就可以得到通知。换句话说，`它负责生产数据，别人可以消费它生产的数据`。
- 如果你是个资深后端，那么可能还记得 `MessageQueue` 的工作模式，它们很像。如果不懂 `MQ` 也没关系，我还是用日常知识给你打个比方。
- `Observable` 就像个传送带。这个传送带不断运行，围绕这个传送带建立了一条生产线，包括一系列工序，不同的工序承担单一而确定的职责。每个工位上有一个工人。
- 整个传送带的起点是原料箱，原料箱中的原料不断被放到传送带上。工人只需要待在自己的工位上，对面前的原料进行加工，然后放回传送带上或放到另一条传送带上即可，简单、高效、无意外 —— 符合程序员的审美。而且这个生产线还非常先进 —— 不接单就不生产，非常有效地杜绝了浪费。

---

### FRP

- 这是一种编程范式，叫做`函数响应式编程`（FRP). `响应式`，就是编程领域的流水线。`函数式`最显著的特征就是没有副作用，而这恰好是对流水线上每个工序的要求

---

### ReactiveX

- 严格来说 `ReactiveX` 应该是`一组 FRP 库`，因为它几乎在每个主流语言下都提供了实现，而且这些实现都是语言原生风格的，不是简单地迁移。如果你在任何语言下用过带有 Rx 前缀的库，那多半儿就是 ReactiveX 的一个实现了，如 RxJava、Rx.NET、RxGroovy、RxSwift 等等。
- `ReactiveX` 本身其实并不难，难的是 FRP 编程范式以及对操作符（operator）的理解。所以，只要学会了任何一个 Rx\* 库，那么其它语言的库就可以触类旁通了

---

### RxJS

- [RxJS 快速入门](https://blog.ralph.wang/articles/23a34d9e_RxJS_%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8#rxjs-%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8)

- `RxJS` 就是 `ReactiveX` 在 `JavaScript` 语言上的实现。对于 `JavaScript` 程序员来说，不管你是前端还是 `NodeJS` 后端，`RxJS` 都会令你受益。

```js
of(1, 2, 3)
  .pipe(
    filter((item) => item % 2 === 1),
    map((item) => item * 3)
  )
  .subscribe((item) => console.log(item));
// 3
// 9
```

---

- `of` 称为创建器（`creator`），用来创建流，它返回一个 `Observable` 类型的对象
- `filter` 和 `map` 称为操作符（`operator`），用来对条目进行处理。这些操作符被当作 `Observable` 对象的 `pipe` 方法的参数传进去。诚然，这个写法略显怪异，不过这主要是被 js 的设计缺陷所迫，它已经是目前 js 体系下多种解决方案中相对好看的一种了。
- `Observable` 对象的 `subscribe` 方法表示消费者要订阅这个流，当流中出现数据时，传给 `subscribe` 方法的回调函数就会被调用，并且把这个数据传进去。这个回调函数可能被调用很多次，取决于这个流中有多少条数据。
- `Observable` 必须被 `subscribe` 之后才会开始生产数据。如果没人 `subscribe` 它，那就什么都不会做。

---

- `of` - 单一值转为流 : 它接收任意多个参数，参数可以是任意类型，然后它会把这些参数逐个放入流中。
- `from` - 数组转为流 : 它接受一个数组型参数，数组中可以有任意数据，然后把数组的每个元素逐个放入流中。
- `range` - 范围转为流 : 它接受两个数字型参数，一个起点，一个终点，然后按 1 递增，把中间的每个数字（含边界值）放入流中。

---

### 解除对回调函数的引用有两种时机

- 一种是这个流完成（complete，包括正常结束和异常结束）了，
- 一种是订阅方主动取消。当流完成时，会自动解除全部订阅回调，而所有的有限流都是会自动完成的。只有无尽流才需要特别处理，也就是订阅方要主动取消订阅。

---

### unsubscribe

- https://blog.ralph.wang/articles/23a34d9e_RxJS_%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8#%E5%8F%96%E6%B6%88%E8%AE%A2%E9%98%85
- `subscribe` 之后，你的回调函数就被别人引用了，因此如果不撤销对这个回调函数的引用，那么与它相关的内存就永远不会释放，同时，它仍然会在流中有数据过来时被调用，可能会导致奇怪的 console.log 等意外行为。
- 因此，必须找到某个时机撤销对这个回调函数的引用。但其实不一定需要那么麻烦。
- 当调用 `Observable` 的 `subscribe` 方法时，会返回一个 `Subscription` 类型的引用，它实际上是一个订阅凭证。把它保存下来，等恰当的时机调用它的 `unsubscribe` 方法就可以取消订阅了。比如在 `Angular` 中，如果你订阅了无尽流，那么就需要把订阅凭证保存在私有变量里，并且在 `ngOnDestroy` 回调中调用它的 `unsubscribe` 方法。

---

### 路由 router

- https://angular.cn/guide/router#router-reference
- `Angular` 的 `Router` 是一个可选服务，它为指定的 `URL` 提供特定的组件视图。它`不是 Angular 核心的一部分`，因此它位于自己的包 `@angular/router` 中。
- 如果你需要查看导航生命周期中发生了什么事件，可以把 `enableTracing` 选项作为路由器默认配置的一部分。这会把每个导航生命周期中发生的每个路由器事件都输出到浏览器控制台中。`enableTracing` 只会用于调试目的。你可以把 `enableTracing: true` 选项作为第二个参数传给 `RouterModule.forRoot()` 方法。

---

### RouterOutlet

- RouterOutlet 是一个来自路由器库的指令，虽然它的用法像组件一样。它充当占位符，用于在模板中标记出路由器应该显示把该组件显示在那个出口的位置。

```html
<router-outlet></router-outlet>
<!-- Routed components go here -->
```

---

- `ng new routing-app --routing`
- 请确保你的 `index.html` 文件的 `<head>` 中有 `<base href="/">` 语句
- https://angular.cn/guide/router
- 路由器会把浏览器 URL 解释成改变视图的操作指南，以完成导航.

---

### 创建路由有三个基本的构建块

- `AppRoutingModule` 导入 `AppModule` 并把它添加到 `imports` 数组中

```js
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
...
imports: [
  BrowserModule,
  AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
],
```

---

- 把 `RouterModule` 和 `Routes` 导入到你的`路由模块中`

```js
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

---

- `routerLink` and `routerLinkActive`

```html
<h1>Angular Router App</h1>
<!-- This nav gives you links to click, which tells the router which route to use (defined in the routes constant in  AppRoutingModule) -->
<nav>
  <ul>
    <li>
      <a routerLink="/first-component" routerLinkActive="active"
        >First Component</a
      >
    </li>
    <li>
      <a routerLink="/second-component" routerLinkActive="active"
        >Second Component</a
      >
    </li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
<router-outlet></router-outlet>
```

---

### 路由顺序

- 路由的顺序很重要，因为 `Router` 在匹配路由时使用`“先到先得”`策略，所以应该在不那么具体的路由前面放置更具体的路由。
- 首先列出`静态路径的路由`，然后是一个与默认路由匹配的空路径路由。通配符路由是最后一个，因为它匹配每一个 URL，只有当其它路由都没有匹配时，Router 才会选择它

---

### 获取路由信息

- 把 `ActivatedRoute` 和 `ParamMap` 导入你的组件

```js
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
```

- 通过把 ActivatedRoute 的一个实例添加到你的应用的构造函数中来注入它：

```js
constructor(
  private route: ActivatedRoute,
) {}
```

---

- 更新 ngOnInit() 方法来访问这个 ActivatedRoute 并跟踪 id 参数：

```js
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
}
```

---

### 设置通配符路由

```js
{ path: '**', component:  }
```

### 显示 404 页面 and 设置重定向

- `path` 为 \*\* 的最后一条路由是通配符路由。如果请求的 URL 与前面列出的路径不匹配，路由器会选择这个路由，并把该用户送到 `PageNotFoundComponent`

```js
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
```

- 要设置重定向，请使用重定向源的 path、要重定向目标的 component 和一个 pathMatch 值来配置路由，以告诉路由器该如何匹配 URL。

---

### 嵌套路由

- 子路由和其它路由一样，同时需要 `path` 和 `component`。唯一的区别是你要把子路由放在父路由的 children 数组中。

```js
const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },
];
```

---

### 使用相对路径

- 可以使用 `../` 符号来上升一个级别，而不用写出到 `SecondComponent` 的完整路径。

```js
<h2>First Component</h2>

<nav>
  <ul>
    <li><a routerLink="../second-component">Relative Route to second component</a></li>
  </ul>
</nav>
<router-outlet></router-outlet>
```

---

### 路由守卫

- `ng generate guard your-guard`
- `CanActivate`
- `CanActivateChild`
- `CanDeactivate`
- `Resolve`
- `CanLoad`

---

```js
export class YourGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // your  logic goes here
  }
}
```

- 在路由模块中，在 `routes` 配置中使用相应的属性。这里的 `canActivate` 会告诉路由器它要协调到这个特定路由的导航。

```js
{
  path: '/your-path',
  component: YourComponent,
  canActivate: [YourGuard],
}
```

---

### 链接参数数组

- 你可以把 RouterLink 指令绑定到一个数组

```html
<a [routerLink]="['/heroes']">Heroes</a>

<a [routerLink]="['/hero', hero.id]">
  <span class="badge">{{ hero.id }}</span>{{ hero.name }}
</a>

<a [routerLink]="['/crisis-center', { foo: 'foo' }]">Crisis Center</a>
```

---

### LocationStrategy 和浏览器的网址样式

- 几乎所有的 `Angular` 项目都会使用默认的 `HTML 5` 风格。它生成的 `URL` 更易于被用户理解，它也为将来做服务端渲染预留了空间
- 现代 `HTML 5` 浏览器支持`history.pushState API`.
- 路由器使用浏览器的 `history.pushState API` 进行导航
- 当路由器导航到一个新的组件视图时，浏览器不会把该 URL 发给服务器，并且不会重新加载此页面。
- 老旧的浏览器在当前地址的 `URL` 变化时总会往服务器发送页面请求……`唯一的例外规则是`：当这些变化位于`“#”`（被称为`“hash”`）后面时不会发送。通过把应用内的路由 `URL` 拼接在 `#` 之后，路由器可以获得这条“例外规则”带来的优点。

---

### 路由器通过两种 LocationStrategy 提供者来支持所有这些风格：

- `PathLocationStrategy` - 默认的策略，支持`“HTML 5 pushState”`风格。
- `HashLocationStrategy` - 支持`“hash URL”`风格。
- `RouterModule.forRoot()` 函数把 `LocationStrategy` 设置成了 `PathLocationStrategy`，使其成为了默认策略。 你还可以在启动过程中改写（override）它，来切换到 `HashLocationStrategy` 风格。
- 在服务器端渲染指定的页面，是一项可以在该应用首次加载时大幅提升响应速度的技术。那些原本需要十秒甚至更长时间加载的应用，可以预先在服务端渲染好，并在少于一秒的时间内完整渲染在用户的设备上。
- 只有当应用的 `URL` 看起来像是`标准的 Web URL`，中间`没有 hash（#`）时，这个选项才能生效。

---

### <base href>

- 路由器使用浏览器的 history.pushState API 进行导航
- 你必须在应用的 `index.html` 中添加一个 `<base href>` 元素才能让 `pushState` 路由正常工作。 浏览器要用 `<base href>` 的值为引用 `CSS`、`脚本`和`图片文件时`使用的相对 `URL` 添加前缀。

```txt
foo://example.com:8042/over/there?name=ferret#nose
\_/   \______________/\_________/ \_________/ \__/
 |           |            |            |        |
scheme    authority      path        query   fragment
```

---

### HashLocationStrategy

- 你可以在根模块的 `RouterModule.forRoot()` 的第二个参数中传入一个带有 `useHash: true` 的对象，以回到基于 `HashLocationStrategy` 的传统方式。

```js
RouterModule.forRoot(routes, { useHash: true }); // .../#/crisis-center/
```

---

### lifecycle hook

- 可以通过实现一个或多个 Angular core 库中定义的生命周期钩子接口来响应组件或指令生命周期中的事件. 你不必实现所有生命周期钩子，只要实现你需要的那些就可以了。
- https://www.youtube.com/watch?v=sh6MFYSdvpA

---

### Angular executes 8 hook methods in the following sequence.

- `ngOnChanges()`: 注意，这发生的非常频繁，所以你在这里执行的任何操作都会显著影响性能。
- `ngOnInit()` : 初始化指令/组件
- `ngDoCheck()`
- `ngAfterContentInit()`
- `ngAfterContentChecked()`
- `ngAfterViewInit()`
- `ngAfterViewChecked()`
- `ngOnDestroy()` : 每当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。

---

![75% bg brightness:0.9](a3.png)

---

### ngOnChanges()

- Angular calls the `ngOnChanges()` method of a `component` or `directive `whenever it detects changes to the `input properties`.
- 一旦检测到该组件或指令的`输入属性`发生了变化，`Angular` 就会调用它的 `ngOnChanges()` 方法。
- `输入属性` : the address, change string value will call onChange(), but change obj value NOT call onChange()
- hero 是输入属性，hero 属性的值是对 hero 对象的引用 。当它自己的 name 属性的值发生变化时，对象引用并没有改变

```js
@Input() hero: Hero;
@Input() power: string;
```

---

- `ngOnChanges()` 方法是你能访问这些属性的第一次机会。
- `Angular` 会在调用 `ngOnInit()` 之前调用 `ngOnChanges()`，而且之后还会调用多次。但它只调用一次 `ngOnInit()`。

- https://www.youtube.com/watch?v=vPzMKV5PKKY&list=PLnzrgyM1SBsaErGITq0_5QjLmExWU8KQJ&index=41

---

### ngOnDestroy()

- `ngOnDestroy()` 这里是释放资源的地方，这些资源不会自动被垃圾回收。如果你不这样做，就存在内存泄漏的风险。

  - 取消订阅可观察对象和 DOM 事件。
  - 停止 interval 计时器。
  - 反注册该指令在全局或应用服务中注册过的所有回调。

- `ngOnDestroy()` 方法也可以用来通知应用程序的其它部分，该组件即将消失。

---

### ngDoCheck()

- by `Zone.js (package.json)`
- 要监控 `ngOnChanges()` `无法捕获`的变更，你可以使用 `ngDoCheck()` 钩子来检测和处理 `Angular` 自己没有捕捉到的变化。
- 虽然 `ngDoCheck()` 钩子可以检测出英雄的 name 何时发生了变化，但却非常昂贵。
- 如果使用这个钩子，那么你的实现`必须非常轻量级`，`否则会损害用户体验`.
- 这些初始化检查大部分都是由 `Angular` 首次在页面的其它地方渲染不相关的数据触发的。只要把光标移动到另一个 <input> 就会触发一次调用。其中的少数调用揭示了相关数据的实际变化情况。

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
