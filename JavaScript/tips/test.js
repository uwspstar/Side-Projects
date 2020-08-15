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
console.log('switch: ------------------------------')
console.log(switchTest(1));

console.log('typeof: ------------------------------')
console.log('typeof undefined //', typeof undefined); // undefined
console.log('typeof window //', typeof window); // object
console.log('typeof {} //', typeof {}); // object
console.log('typeof [] //', typeof []); // object
console.log('typeof null //', typeof null); // object
