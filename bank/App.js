module.export = class App {
    static #users = []
    static #loanInterestRate = 0

    static createUser(fullName, email) {
        const existingUser = App.findUserByEmail(email)
        if (existingUser) {
            console.log("Já existe um usuário com esse email")
            return
        }

        const account = new account()
        const user  = new user(fullName,email, account)
        App.#users.push(user)
        console.log("Usuário criado com sucesso!")
    }

       static findUserByEmail(email) {
           return App.#users.find((user) => user.email === email)
       }

       static deposit(email, value){
           const user = App.findUserByEmail(email)
           if (!user) {
               console.log("Usuário não encontrado.")
               return
           }
           user.account.deposit(value)
           console.log("Depósito realizado")
       }

       static transfer(senderEmail, receiverEmail, value) {
           const sender = App.findUserByEmail(senderEmail)
           if(!sender) {
               console.log("Remetente não encontrado")
               return
           }
           sender.account.transfer(senderEmail, receiverEmail, value)
       }

       static takeLoan(email, value, numInstallments) {
           const user = App.findUserByEmail(email)
           if (!user) {
               console.log("Usuário não encontrado")
               return
           }
           user.account.takeLoan(value, numInstallments)
           console.log("Emprestimo concedido com sucesso!")
       }

       static changeLoanInterestRate(percentage) {
           Loan.seInterestRate(percentage)
           console.log("Taxa de juros atualizada com sucesso!")
       }
}