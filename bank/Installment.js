module.exports = class Installment {
    constructor(value, number) {
        this.value = value
        this.number = number
        this.status = "pendente"
    }

    constructor(value, numInstallments) {
        this.value = value
        this.creationDate = new Date()
        this.installments = []
        this.calculateInstallments(numInstallments)
    }

    calculateInstallments(numInstallments) {
        const installmentValue = this.value / numInstallments
        for (let i = 1; i <= numInstallments;i++) {
            this.installments.push(installmentValue, i)
            this.installments.push(installments)
        }
    }
}