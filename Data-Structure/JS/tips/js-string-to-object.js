// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

// str to obj : JSON.parse(json)
// obj to str : JSON.stringify(content_of_some_variable_object)


const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);// expected output: 42
console.table(obj.result);