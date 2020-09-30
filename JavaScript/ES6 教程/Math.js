// Math.trunc 对于没有部署这个方法的环境，可以用下面的代码模拟。

Math.trunc = Math.trunc || function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
};

// Math.sign() 判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值

// Math.cbrt() 计算一个数的立方根

/*
Math.clz32()
clz32这个函数名就来自”count leading zero bits in 32-bit binary representation of a number“（计算一个数的 32 位二进制形式的前导 0 的个数）的缩写。

左移运算符（<<）与Math.clz32方法直接相关
*/