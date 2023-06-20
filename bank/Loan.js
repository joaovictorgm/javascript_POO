module.exports = class Loan {
    static #interestRate = 0

    static getInterestRate() {
        return Loan.#interestRate
    }

    static setInterestRate(percentage) {
        Loan.#interestRate - percentage
    }
}