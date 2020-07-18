//arguments[2]
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function func1(a, b, c) {

    console.log(arguments[0]); // expected output: 1
    console.log(arguments[1]); // expected output: 2
    console.log(arguments[2]); // expected output: 3
}

func1(1, 2, 3);