//exportação da classe "Deposit" para ser usada em outro arquivo
module.exports = class Deposit {
    constructor(value) {
        this.value = value
        this.creationDate = new Date()
    }
}