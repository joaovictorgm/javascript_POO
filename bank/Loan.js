const Installment = require('./Installment')

module.exports = class Loan {
    //Propriedade privada para taxa de juros de empréstimo e é iniciada com o valor  de 1.05 que representa 5%
    static #interestRate = 1.05 // como valor padrão representando 5%
// Construtor da classe 
 constructor(value, installments) {
        this.value = value
// Array vazio para as parcelas do empréstimo
        this.installments = []
        //loop "for" para criar as parcelas do emprestimo
        for (let i = 1; i <= installments; i++) {
        //Criando uma nova instÂncia para cada parcela do empréstimo
            this.installments.push(new Installment((value * Loan.#interestRate) / installments, i))
        }
        //Criação da propriedade com o valor atual da data e hora de criação do empréstimo
        this.creationDate = new Date()
    }
    //Getter estático que permite acessar o valor da taxa de juros do empréstimo usadno sintaxw de propriedade
    static get InterestRate() {
        return Loan.#interestRate
    }
    //Setter estático para a propriedade "interestRate". Ele permite que definamos um novo valor para a taxa de juros do empréstimo. O valor passado como parâmetro é em 1 porque é para converter a porcentagem em um fator multiplkicativo
    static set InterestRate(newPercentage) {
        Loan.#interestRate = 1 + (newPercentage / 100)
    }

}