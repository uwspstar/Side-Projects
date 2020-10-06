const Schema = require("./employees_pb")

const xing = new Schema.Employee();
xing.setId(1001);
xing.setName("xing");

const yang = new Schema.Employee();
yang.setId(1002);
yang.setName("yang");

const andrew = new Schema.Employee();
andrew.setId(1003);
andrew.setName("andrew");

const employees = new Schema.Employees();
employees.addEmployees(xing);
employees.addEmployees(yang);
employees.addEmployees(andrew);


console.log("name :", xing.getName());
console.log("binary :", employees.serializeBinary());