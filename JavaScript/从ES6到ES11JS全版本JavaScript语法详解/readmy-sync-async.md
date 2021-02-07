---
marp: true
theme: default
header: '从ES6到ES11JS全版本JavaScript语法详解'
footer: 'study note by Xing, source https://www.youtube.com/watch?v=uTYkUfniMeo&list=PL9nxfq1tlKKn96qqvz92I-09Qg21F12c2'
paginate: true
size: 16:9
---

# 从 ES6 到 ES11JS 全版本 JavaScript 语法详解

- https://www.youtube.com/watch?v=uTYkUfniMeo&list=PL9nxfq1tlKKn96qqvz92I-09Qg21F12c2
- https://wangdoc.com/es6/

---

### 同步任务和异步任务

- https://wangdoc.com/javascript/async/general.html#%E5%90%8C%E6%AD%A5%E4%BB%BB%E5%8A%A1%E5%92%8C%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1

- 程序里面所有的任务，可以分成两类：同步任务（`synchronous`）和异步任务（`asynchronous`）。

- `同步任务`是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。

---

### 异步任务 asynchronous

- `异步任务`是那些被引擎放在一边，不进入主线程、而`进入任务队列`的任务。只有引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果），该任务（采用回调函数的形式）才会进入主线程执行。`排在异步任务后面的代码，不用等待异步任务结束会马上运行`，也就是说，异步任务不具有“堵塞”效应。
- `异步任务`的写法通常是`回调函数`。一旦异步任务重新进入主线程，就会执行对应的回调函数。如果一个异步任务没有回调函数，就不会进入任务队列，也就是说，不会重新进入主线程，因为没有用回调函数指定下一步的操作。

---

### Event Loop

- a programming construct that waits for and dispatches events or messages in a program
- JavaScript 引擎怎么知道异步任务有没有结果，能不能进入主线程呢？答案就是`引擎在不停地检查，一遍又一遍`，只要同步任务执行完了，引擎就会去检查那些挂起来的异步任务，是不是可以进入主线程了。这种`循环检查的机制`，就叫做`事件循环`（`Event Loop`）。

---

### Ajax

- 举例来说，`Ajax` 操作可以当作同步任务处理，也可以当作异步任务处理，由开发者决定。如果是同步任务，主线程就等着 Ajax 操作返回结果，再往下执行；如果是异步任务，主线程在发出 Ajax 请求以后，就直接往下执行，等到 Ajax 操作有了结果，主线程再执行对应的回调函数

---

### async

- `Event Table`
- `Event Queue`
- `setTimeout` min timeout is `4 mil sec`

---

```js
console.log('log 1');
setTimeout(() => {
  console.log('setTimeout 1');
}, 200);
console.log('log 2');
setTimeout(() => {
  console.log('setTimeout 2');
}, 0);
console.log('log 3');
// log 1
// log 2
// log 3
// setTimeout 2
// setTimeout 1
```

---

![70% bg brightness:0.9](async.png)

---

### Ajax

- Ajax (also AJAX, short for "`Asynchronous JavaScript and XML`")
- create XMLHttpRequest object
- `XMLHttpRequest.onreadystatechange` = callback;
- `callback` is the function to be executed when the readyState changes.
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange

---

```js
var url = 'http://google.com';
var xmlhttp;
if (window.XMLHttpRequest) {
  xmlhttp = new XMLHttpRequest();
} else {
  //old version browsers
  xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}
xmlhttp.open('GET', url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  // In local files, status is 0 upon success in Mozilla Firefox
  if (xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log(xhr.responseText);
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
xmlhttp.send();
```

---

### Ajax

```js
var ajax = function (url, callbackSuccess, callbackFailure) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xmlhttp.open('GET', url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        callbackSuccess && callbackSuccess(xhr.responseText);
      } else {
        callbackFailure && callbackFailure('error');
      }
    }
  };
  xmlhttp.send();
};
//ajax.call('http://google.com', callback)
ajax('http://google.com', (res) => {
  console.log(res);
});
```

---

### 异步操作的模式

- https://wangdoc.com/es6/generator-async.html

1. `回调函数` : `callback`
2. `事件监听` : 另一种思路是采用`事件驱动模式`。异步任务的执行不取决于代码的顺序，而`取决于某个事件是否发生`。such as jQuery : `f1.on('done', f2);`
3. `发布/订阅` : 事件完全可以理解成“信号”，如果存在一个“信号中心”，某个任务执行完成，就向信号中心“发布”（`publish`）一个信号，其他任务可以向信号中心“订阅”（`subscribe`）这个信号，从而知道什么时候自己可以开始执行。这就叫做”`发布/订阅模式`”（`publish-subscribe pattern`），又称“`观察者模式`”（`observer pattern`）。 such as `jQuery.subscribe('done', f2);`

---

### 异步操作的流程控制

- https://wangdoc.com/javascript/async/general.html#%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C%E7%9A%84%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6

---

### 流程控制函数 : 串行执行

```js
var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
  console.log('参数为 ' + arg + ' , 1秒后返回结果');
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log('完成: ', value);
}

function series(item) {
  if (item) {
    async(item, function (result) {
      results.push(result);
      return series(items.shift()); //recursive
    });
  } else {
    return final(results[results.length - 1]);
  }
}

series(items.shift());
```

---

### 流程控制函数 : 并行执行

```js
var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
  console.log('参数为 ' + arg + ' , 1秒后返回结果');
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log('完成: ', value);
}

items.forEach(function (item) {
  async(item, function (result) {
    results.push(result);
    if (results.length === items.length) {
      final(results[results.length - 1]);
    }
  });
});
```

---

### 并行与串行的结合

- 每次最多只能并行执行 `n` 个`异步任务`，这样就避免了过分占用系统资源。

---

```js
var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
  console.log('参数为 ' + arg + ' , 1秒后返回结果');
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log('完成: ', value);
}

function launcher() {
  while (running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function (result) {
      results.push(result);
      running--;
      if (items.length > 0) {
        launcher();
      } else if (running == 0) {
        final(results);
      }
    });
    running++;
  }
}

launcher();
```

---

### timer :

- JavaScript 提供定时执行代码的功能，叫做定时器（`timer`）
- `setTimeout` 和 `setInterval` 函数，都返回一个整数值，表示计数器编号。将该整数传入 `clearTimeout` 和 `clearInterval` 函数，就可以取消对应的定时器。
- `setTimeout()`
- `setInterval()`
- `clearTimeout()`
- `clearInterval()`
- 可以写一个函数，取消当前所有的 `setTimeout` 定时器。先调用 `setTimeout`，得到一个计算器编号，然后把编号比它小的计数器全部取消。
- 实际上，`setTimeout(f, 0)` 不会真的在`0`毫秒之后运行，不同的浏览器有不同的实现。以 Edge 浏览器为例，会等到 4 毫秒之后运行。

---

### setTimeout()

- `setTimeout()` 函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。

```js
var timerId = setTimeout(func | code, delay);
```

```js
console.log(1);
setTimeout('console.log(2)', 1000);
console.log(3);
```

- `console.log(2)`必须以字符串的形式，作为 `setTimeout` 的参数。
- 如果推迟执行的是函数，就直接将函数名，作为 `setTimeout` 的参数。

---

- `setTimeout` 第二个参数如果省略，则默认为 `0`
- `setTimeout` 还允许更多的参数。它们将依次传入推迟执行的函数（回调函数）。

```js
setTimeout(
  function (a, b) {
    console.log(a + b);
  },
  1000,
  1,
  1
);
```

---

- 还有一个需要注意的地方，如果回调函数是对象的方法，那么 `setTimeout` 使得方法内部的 `this` 关键字指向`全局环境`，而不是定义时所在的那个对象。
- (y is function of object ) 解决方法是 :
  - obj.y 放在一个`匿名函数之中`，这使得 obj.y 在 obj 的作用域执行，而不是在全局作用域内执行，所以能够显示正确的值。
  - 另一种解决方法是，使用 `bind` 方法，将 obj.y 这个方法绑定在 obj 上面

---

### setInterval()

- `setInterval` 函数的用法与 `setTimeout` 完全一致，区别仅仅在于 `setInterval` 指定某个任务每隔一段时间就执行一次，也就是`无限次的定时执行`
- 通过`setInterval`方法实现网页动画的例子

---

### debounce

```js
$('textarea').on('keydown', debounce(ajaxAction, 2500));

function debounce(fn, delay) {
  var timer = null; // 声明计时器
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
```

- 上面代码中，只要在 2500 毫秒之内，用户再次击键，就会取消上一次的定时器，然后再新建一个定时器。这样就保证了回调函数之间的调用间隔，至少是 2500 毫秒。

---

### setTimeout(f, 0)有几个非常重要的用途

- 可以调整事件的发生顺序。
- https://wangdoc.com/javascript/async/timer.html#%E5%BA%94%E7%94%A8
- 因为 J`avaScript 执行速度远高于 DOM`，会造成大量 `DOM` 操作“堆积”，而写法二就不会，这就是`setTimeout(f, 0)`的好处。

- 另一个使用这种技巧的例子是`代码高亮的处理`。如果代码块很大，一次性处理，可能会对性能造成很大的压力，那么将其分成一个个小块，一次处理一块，比如写成 setTimeout(highlightNext, 50)的样子，性能压力就会减轻。

---

### Callback hell

---

### Promise

- `Promise` 构造函数接受一个函数作为参数，该函数的两个参数分别是 `resolve` 和 `reject`。它们是两个函数，`由 JavaScript 引擎提供，不用自己实现`。

```js
var promise = new Promise(function (resolve, reject) {

  if (/* 异步操作成功 */){
    resolve(value);
  } else { /* 异步操作失败 */
    reject(new Error());
  }
});
```

---

![95% bg brightness:0.9](promise.png)

---

### Promise.prototype.then()

- Promise 实例的 `then` 方法，用来添加回调函数。
- `then` 方法可以接受两个回调函数，第一个是`异步操作成功时`（变为 `fulfilled` 状态）的回调函数，第二个是`异步操作失败`（变为 `rejected`）时的回调函数（该参数可以省略）。一旦状态改变，就调用相应的回调函数。

---

### Promise 实例具有三种状态。

- 异步操作未完成（`pending`）
- 异步操作成功（`fulfilled`）
- 异步操作失败（`rejected`）
- 上面三种状态里面，`fulfilled`和`rejected`合在一起称为`resolved`（已定型）。

- 这三种的状态的变化途径只有两种。`一旦状态发生变化，就凝固了，不会再有新的状态变化`
  - 从“未完成”到“成功”
  - 从“未完成”到“失败”

---

### 为什么 Node 约定，回调函数的第一个参数

- 为什么 `Node` 约定，回调函数的第一个参数，必须是错误对象 `err`（如果没有错误，该参数就是 `null`）？原因是执行分成两段，第一段执行完以后，任务所在的上下文环境就已经结束了。在这以后抛出的错误，原来的上下文环境已经无法捕捉，只能当作参数，传入第二段。

---

### Promise 完成图片的加载

- https://wangdoc.com/es6/promise.html#promiseall

```js
const imgArr = ['1.jpg', '2.jpg', '3.jpg'];
let promiseArr = [];
imgArr.forEach((item) => {
    promiseArr.push(
        new Promise((resolve, reject) => {
            // upload img ()
            resolve()
        });
    )
});
Promise.all(promiseArr).then(res => {
    console.log('finished upload img');
})
```

---

```js
var preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

- 上面代码中，image 是一个图片对象的实例。它有两个事件监听属性，onload 属性在图片加载成功后调用，onerror 属性在加载失败调用。

---

- 上面的`preloadImage()`函数用法如下。

```js
preloadImage('https://example.com/my.jpg')
  .then(function (e) {
    document.body.append(e.target);
  })
  .then(function () {
    console.log('加载成功');
  });
```

- 上面代码中，图片加载成功以后，`onload` 属性会返回一个事件对象，因此第一个 then()方法的回调函数，会接收到这个事件对象。该对象的 target 属性就是图片加载后生成的 DOM 节点。

---

### Promise.all()

- https://wangdoc.com/es6/promise.html#promiseall
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}); // expected output: Array [3, 42, "foo"]
```

---

### Promise.race()

- https://wangdoc.com/es6/promise.html#promiserace
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});
Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // Both resolve, but promise2 is faster
}); // expected output: "two"
```
