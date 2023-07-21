const Deposit = require('./deposit')
const Loan = require('./Loan')
const Transfer = require('./Transfer')
const User = require('./User')


// O "#" indica que é uma variável privada e não devem ser acessadas diretamente fora da classe. Os comentários são variáveis que podiam ser privadas mas estão acessiveis fora da classe 
module.exports = class Account {
    #balance
    //#deposits = []
    //#loans = []
    //#transfers = []

//Definição do construtor da classe "Account". Ele recebe um parâmetro "owner" que representa o proprietário da conta. Dentro do construtor, estamos definindo as propriedades "owner" (proprietário), "#balance" (saldo), "deposits"(depósitos), "loans"(empréstimos) e "transfers" (transferências). O saldo inicial é definido como 0 e as propriedades "deposits", "loans" e "transfers" são inicializadas com arrays vazios
constructor(owner) {
    this.owner = owner
    this.#balance = 0
    this.deposits = []
    this.loans = []
    this.transfers = []
}
//getter para a propriedade "balance".Ele permite que acessemos o valor do saldo(#balance) da conta usando a sintaxe de propriedade, por exemplo,"account.balance"
get balance() {
    return this.#balance
}

//Este método "newDeposit" é usado para adicionar um novo depósito á conta. Ele recebe um parâmetro "deposit" que representa o objeto de depósito. O valor do depósito é adicionado ao saldo(#balance) da conta e o objeto de depósito é adicionado ao array "deposits"
newDeposit(deposit) {
    this.#balance += deposit.value
    this.deposits.push(deposit)
}
// Este método é usado para solicitar um empréstimo. Ele recebe um parâmetro "loan" que representa o objeto de empréstimo. O valor do empréstimo é adicionado ao saldo (#balance) da conta e o objeto de empréstimo é adicionado ao array "loans"
takeLoan(loan) {
    this.#balance += loan.value
    this.loans.push(loan)
}
//Este método é usado para adicionar uma nova transferência à conta.Ele recebe um parâmetro "transfer" que representa o objeto de transferência. Se o proprietário da conta for o remetente da transferência é adicionado ao array "tranfers". Se o proprietário da conta for o destinatário da transferência, o valor da transferência é adicionado ao saldo (#balance) da conta e o objeto de transferência é adicionado ao array "transfers"
newTransfer(transfer) {
    if (transfer.sender.email === this.owner.email) {
        this.#balance -= transfer.value
        this.transfers.push(transfer)
    } else if (transfer.receiver.email === this.owner.email){
        this.#balance += transfer.value
        this.transfers.push(transfer)
    }
}

}