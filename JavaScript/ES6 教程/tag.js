// https://wangdoc.com/es6/string.html

console.log`123` // ["123", raw: Array[1]]

tag`First line\nSecond line`

function tag(strings) {
    console.log(strings.raw[0]);
    // strings.raw[0] 为 "First line\\nSecond line"
    // 打印输出 "First line\nSecond line"
}

/*
上面代码中，tag函数的第一个参数strings，有一个raw属性，也指向一个数组。该数组的成员与strings数组完全一致。比如，strings数组是["First line\nSecond line"]，那么strings.raw数组就是["First line\\nSecond line"]。两者唯一的区别，就是字符串里面的斜杠都被转义了。比如，strings.raw 数组会将\n视为\\和n两个字符，而不是换行符。这是为了方便取得转义之前的原始模板而设计的。
*/
