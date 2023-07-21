//Importação de módulos
const User = require('./User')
const Transfer = require('./Transfer')
const Loan = require('./Loan')
const Deposit = require('./Deposit')
//Exportando a classe "App" como um módulo para ser utilizado em outros arquivos
module.exports = class App {
//Definição de uma propriedade privada "users" para a classe "App". Essa propriedade será uma matriz que armazenará objetos "User" representando os usuários do aplicativo
    static #users = []
//Método estático para receber um parâmetro "email". Ele é usado para procurar um usuário na matriz "users" com base no email fornecido. Se o usuário é encontrado é retornado
    static findUserByEmail(email) {
           const user = this.#users.find((user) => user.email === email)
           return user ?? null
       }

// Método que que recebe os parÂmetros fullName, email para criar um novo usuário e adicioná-lo à matriz "users" somen se não existir outro usuário igual
    static createUser(fullName, email) {
        const existingUser = App.findUserByEmail(email)
        if (!existingUser) {
           this.#users.push(new User(fullName, email))
          
        }   
    } 
//Método com os parâametros "email" e "value" para ser usado para adicionar um depósito à conta do usuário do email entregue
       static deposit(email, value){
           const user = App.findUserByEmail(email)
           if (user) {
               const addDeposit = new Deposit(value)
               user.account.newDeposit(addDeposit)
           }  
       }
       //Método para adicionar transferência 
        static transfer(senderEmail, receiverEmail, value) {
        //Essas linhas procuram o usúario correspondente ao email do remetente e do destinatário usando o método estático "findUserByEmail"
           const sender = App.findUserByEmail(senderEmail)
           const receiver = App.findUserByEmail(receiverEmail) 
        //Verifica se encontra tanto o remetente quanto o destinatário com base nos emails fornecidos. 
           if(sender && receiver) {
               //Chama uma nova instância e armazena na variável. A classe "Transfer" serve para transferir fundos entre duas contas
              const addTransfer = new Transfer(sender, receiver, value)
              //Adiciona a transferência a lista de transferências de acordo com a conta 
              sender.account.newTransfer(addTransfer)
              receiver.account.newTransfer(addTransfer)
           } 
       }
        //Método para adicionar um empréstimo à conta do usuário correspondente ao email fornecido
       static addLoan(email, value, numInstallments) {
           const user = App.findUserByEmail(email)
           if (user) {
            const newLoan = new Loan(value, numInstallments)
            user.account.takeLoan(newLoan)
           }
        }
        //Método para alterar taxa de juros dos empréstimos, é definida com base no valor fornecido
        static changeLoanfee(newPercentage){
            Loan.InterestRate = newPercentage
        }
}