module.exports = class Transfer {
    constructor(sender, receiver, value,){
       this.sender = sender
       this.receiver = receiver
       this.value = value
       this.creationDate = new Date()  
    }

    tranfer(senderEmail, receiverEmail, value) {
        const sender = App.findUserByEmail(senderEmail)
        const receiver = App.findUserByEmail(receiverEmail)

        if (!sender || !receiver) {
            console.log("Usuário não encontrado.")
            return
        }

        if(sender.email === receiver.email) {
            console.log("Você não pode tranferir para si mesmo")
        }

        if (value > this.#balance) {
            console.log("Saldo insuficiente para a tranferência.")
            return
        }

        this.#balance -= value
        const tranfer = new Transfer(sender, receiver, value)
        this.#tranfers.push(transfer)

        if (receiver.email === this.owner.email) {
            receiver.account.deposit(value)
        } else {
            receiver.account.#balance += value
        }
    }
    
}