
function foo(x, y) {
    console.log(this, x, y); // { name: 'xing' } 1 2
}
foo.bind({ name: 'xing' }, 1, 2)();


console.log((function () { }).bind({}).name); // bound 