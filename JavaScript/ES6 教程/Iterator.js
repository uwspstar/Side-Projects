/*
任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。*/

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// first is hello
// second is world


// 获取键名
for (let [key] of map) {
    // ...
}

// 获取键值
for (let [, value] of map) {
    // ...
}

/*
ES2020 增加了String.prototype.matchAll()方法，可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组。

const string = 'test1test2test3';
const regex = /t(e)(st(\d?))/g;

for (const match of string.matchAll(regex)) {
  console.log(match);
}
// ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
// ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
// ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]

上面代码中，由于string.matchAll(regex)返回的是遍历器，所以可以用for...of循环取出。相对于返回数组，返回遍历器的好处在于，如果匹配结果是一个很大的数组，那么遍历器比较节省资源。

遍历器转为数组是非常简单的，使用...运算符和Array.from()方法就可以了

// 转为数组的方法一
[...string.matchAll(regex)]

// 转为数组的方法二
Array.from(string.matchAll(regex))
*/