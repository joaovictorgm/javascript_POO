const Installment = require('./Installment')

module.exports = class Loan {
    static #interestRate = 0

    static getInterestRate() {
        return Loan.#interestRate
    }

    static setInterestRate(percentage) {
        Loan.#interestRate = percentage
    }

    constructor(value, numInstallments) {
        this.value = value
        this.creationDate = new Date()
        this.installments = []
        this.calculateInstallments(numInstallments)
    }

    calculateInstallments(numInstallments) {
        const installmentValue = this.value / numInstallments
        for (let i = 1; i <= numInstallments; i++) {
            const installment = new Installment(installmentValue, i)
            this.installments.push(installment)
        }
    }
}