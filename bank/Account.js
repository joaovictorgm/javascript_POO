const Deposit = require('./deposit')
const Loan = require('./Loan')
const Transfer = require('./Transfer')


module.exports = class Account {
    #balance = 0
    #deposits = []
    #loans = []
    #transfers = []


constructor(owner) {
    this.owner = owner
}

get balance() {
    return this.#balance
}


deposit(value) {
    this.#balance += value
    const deposit = new Deposit(value)
    this.#deposits.push(deposit)
}

takeLoan(value, numInstallments) {
    this.#balance += value
    const loan = new Loan(value, numInstallments)
    this.#loans.push(loan)
}

transfer(senderEmail, receiverEmail, value) {
    const sender = App.findUserByEmail(senderEmail)
    const receiver = App.findUserByEmail(receiverEmail)

    if (!sender || !receiver) {
        console.log("Usuário não encontrado.")
        return
    }

    if (sender.email === receiver.email) {
        console.log("Você não pode tranferir para si mesmo.")
        return
    }

    if (value > this.#balance) {
        console.log("Saldo insuficiente para a tranferência.")
        return
    }

    this.#balance -= value
    const transfer = new Transfer(sender, receiver, value)
    this.#transfers.push(transfer)

    if (receiver.email === this.owner.email) {
        receiver.account.deposit(value)
    } else {
        receiver.account.#balance += value
    }
}

}