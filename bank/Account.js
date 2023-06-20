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
    const deposit = new deposit(value)
    this.#deposits.push(deposit)
}

takeLoan(value, numInstallments) {
    this.#balance += value
    const loan = new loan(value, numInstallments)
    this.#loans.push(loan)
}

}