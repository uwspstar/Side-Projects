let target = { a: "1" }
let source = { a: "100", b: "2" }

Object.assign(target, source);
console.log('target', target); //target { a: '100', b: '2' }

