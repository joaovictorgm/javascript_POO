const App = require('./App')

//Código para criar usuários
App.createUser("João Silva", "joao@example.com")
App.createUser("Maria Souza", "joana@example.com")

//Realizar depósitos
App.deposit("joao@example.com", 1000)
App.deposit("joana@example.com", 500)

//Realizar tranferência
App.transfer("joao@example.com", "joana@example.com", 200)

//Realizar empréstimo
App.takeLoan("joao@example.com", 5000, 12)

//Alterar taxa de juros dos empréstimos
App.changeLoanInterestRate(10)

//Obter informações do usuário
const joao = App.findUserByEmail("joao@example.com")
console.table(joao)

const joana = App.findUserByEmail("joana@example.com")
console.table(joana)