const Address = require("./Address");
const Person = require("./Person");



const addr = new Address("7 de Setembro", 99, "Santa Augusta", "Criciúma", "SC")
const john = new Person("John Doe", addr)

console.log(john)
console.log(john.Address.fullAddress())