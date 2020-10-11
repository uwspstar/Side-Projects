function foo() {
    let user = {
        name: "xing",
        age: 18
    }
    return user;
}
let { age, name, school = 'MIT' } = foo()
console.log(name, age, school);//xing 18 MIT
