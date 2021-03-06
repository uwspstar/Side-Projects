/* `ES6` 内部使用严格相等运算符（`===`），判断一个位置是否有值。
所以，只有当一个数组成员严格等于 `undefined`，默认值才会生效。

- 如果一个数组成员是 `null`，默认值就不会生效，因为 `null` 不严格等于 `undefined`。
*/

let [x = 1] = [undefined];
x; // 1

let [x = 1] = [null];
x; // null

/*
只要等号右边的值不是对象或数组，就先将其转为对象。
由于 undefined 和 null 无法转为对象，
所以对它们进行解构赋值，都会报错

*/
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError

let { toString: s } = 123;
s === Number.prototype.toString; // true

let { toString: s } = true;
s === Boolean.prototype.toString; // true