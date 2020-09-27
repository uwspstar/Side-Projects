/*
总之，codePointAt()方法会正确返回 32 位的 UTF-16 字符的码点。对于那些两个字节储存的常规字符，它的返回结果与charCodeAt()方法相同。

codePointAt()方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString()方法转换一下。

let s = '𠮷a';

s.codePointAt(0).toString(16) // "20bb7"
s.codePointAt(2).toString(16) // "61"
你可能注意到了，codePointAt()方法的参数，仍然是不正确的。比如，上面代码中，字符a在字符串s的正确位置序号应该是 1，但是必须向codePointAt()方法传入 2。解决这个问题的一个办法是使用for...of循环，因为它会正确识别 32 位的 UTF-16 字符。

let s = '𠮷a';
for (let ch of s) {
  console.log(ch.codePointAt(0).toString(16));
}
// 20bb7
// 61
另一种方法也可以，使用扩展运算符（...）进行展开运算。

let arr = [...'𠮷a']; // arr.length === 2
arr.forEach(
  ch => console.log(ch.codePointAt(0).toString(16))
);
// 20bb7
// 61
codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。

function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}

is32Bit("𠮷") // true
is32Bit("a") // false
*/