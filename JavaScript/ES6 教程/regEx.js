/*
正则表达式使用圆括号进行组匹配。

const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
上面代码中，正则表达式里面有三组圆括号。使用exec方法，就可以将这三组匹配结果提取出来。

const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj[1]; // 1999
const month = matchObj[2]; // 12
const day = matchObj[3]; // 31
*/