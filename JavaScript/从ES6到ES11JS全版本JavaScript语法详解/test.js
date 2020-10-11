// JSON data key and value are string
let data = '{"name" : "xing" , "age" : "18"}'
let { age, name } = JSON.parse(data)
console.log(name, age);//xing 18
