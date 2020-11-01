function fun1(z, x = 1, y = 2) { }
console.log(fun1.length); // 1

function fun1(x = 1, y = 2, z) { }
console.log(fun1.length); // 0

function func2(a, b) { }
console.log(func2.length); // 2
