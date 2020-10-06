const fs = require("fs")
const employees = [];

employees.push({
    "name": "xing",
    "id": "0001"
});
employees.push({
    "name": "yang",
    "id": "0002"
});
employees.push({
    "name": "andrew",
    "id": "0003"
})
employees.push({
    "name": "edward",
    "id": "0004"
})

let file = "/Users/xingwang/Side-Projects/ProtoBuff/demo/test.json";
fs.writeFileSync(file, JSON.stringify(employees));