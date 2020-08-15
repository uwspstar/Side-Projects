function test(n) {

    while (n-- > 0) { // n-- >
        console.log('n: ', n);
    }
}
//test(3);
console.log('NUMBER ------------------------------')
console.log('0.1 + 0.2 === 0.3', 0.1 + 0.2 === 0.3) // false
console.log('(0.3 - 0.2) === (0.2 - 0.1)', (0.3 - 0.2) === (0.2 - 0.1)); // false
console.log('Math.pow(2, 1024)', Math.pow(2, 1024)) // Infinity
// false

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