// A classe representa uma parcela de um empréstimo ou transferência, contendo informações sobre o seu valor, número e status
module.exports = class Installment {
    constructor(value, number) {
        this.value = value
        this.number = number
        this.status = "pendente"
    }
}