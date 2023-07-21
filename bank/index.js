const App = require('./App')

//Código para criar usuários
App.createUser("João Silva", "joao@example.com")
App.createUser("Joana Souza", "joana@example.com")

//Realizar depósitos
App.deposit("joao@example.com", 3000)
App.deposit("joana@example.com", 5600)

//Realizar tranferência
App.transfer("joao@example.com", "joana@example.com", 800)
//Aplicando juros
App.changeLoanfee(10)
//Realizar empréstimo
App.addLoan("joana666@example.com", 5000, 12)
//Obter informações do usuário

console.log(App.findUserByEmail("joao@example.com"))
console.log(App.findUserByEmail("joao@example.com").account)
console.log(App.findUserByEmail("joana@example.com"))
console.log(App.findUserByEmail("joana@example.com").account)
console.log(App.findUserByEmail("joana@example.com").account.loans[0].installments)