function test(n) {

    while (n-- > 0) { // n-- >
        console.log('n: ', n);
    }
}
//test(3);
console.log('Number:------------------------------')

console.log('0.1 + 0.2 === 0.3 //', 0.1 + 0.2 === 0.3) // false
console.log('(0.3 - 0.2) === (0.2 - 0.1) //', (0.3 - 0.2) === (0.2 - 0.1)); // false
console.log('Math.pow(2, 1024) //', Math.pow(2, 1024)) // Infinity

console.log('Number.MAX_VALUE //', Number.MAX_VALUE)// 1.7976931348623157e+308
console.log('Number.MIN_VALUE //', Number.MIN_VALUE)// 5e-324

console.log('JavaScript 内部实际上存在2个0：一个是+0，一个是-0')
console.log('Infinity === -Infinity //', Infinity === -Infinity)  // false
console.log('0 / 0 //', 0 / 0) // NaN
console.log('1 / 0 //', 1 / 0) // Infinity

console.log('除以正零得到+Infinity，除以负零得到-Infinity，这两者是不相等的')
console.log('(1 / +0) === (1 / -0) //', (1 / +0) === (1 / -0)) //false

console.log('Infinity与NaN比较，总是返回false')
console.log('Infinity > NaN  //', Infinity > NaN) // false
console.log('-Infinity > NaN  //', -Infinity > NaN) // false

console.log('Infinity < NaN  //', Infinity < NaN) // false
console.log('-Infinity < NaN  //', -Infinity < NaN) // false

console.log('0 * Infinity //', 0 * Infinity)// NaN
console.log('0 / Infinity //', 0 / Infinity)// 0
console.log('Infinity / 0 //', Infinity / 0)// Infinity

console.log('switch: ------------------------------')
function switchTest(x) {
    switch (x) {
        case 1:
            console.log('x 等于1');
        case 2:
            console.log('x 等于2');
        case 3:
        case 4:
            console.log('x 等于4');
        default:
            console.log('x 等于其他值');
    }
}
console.log(switchTest(1));

console.log('typeof: ------------------------------')
console.log('typeof undefined //', typeof undefined); // undefined
console.log('typeof window //', typeof window); // object
console.log('typeof {} //', typeof {}); // object
console.log('typeof [] //', typeof []); // object
console.log('typeof null //', typeof null); // object

console.log('parseInt: ------------------------------')
console.log('parseInt的返回值只有两种可能，要么是一个十进制整数，要么是NaN')
console.log('parseInt 用于将字符串转为整数, 字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分.')
console.log("parseInt('   81')", parseInt('   81')) // 81
console.log("parseInt('12.34') //", parseInt('12.34'))// 12
console.log("parseInt('.3') //", parseInt('.3')) // NaN
console.log("parseInt('15px')//", parseInt('15px3'))  // 15

console.log('parseInt的第二个参数为10，即默认是十进制转十进制')
console.log("parseInt('1000', 2) //", parseInt('1000', 2)) // 8
console.log("parseInt('1000', 6) //", parseInt('1000', 6)) // 216
console.log("parseInt('1000', 8) //", parseInt('1000', 8)) // 512