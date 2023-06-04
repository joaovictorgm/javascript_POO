// método get

class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 *  100 // regra para mudar o número para inteiro
        console.log(this.#amount)
    }

    get amount() {
        return this.#amount / 100
    }
    //função normal
   // amount() {
        //return this.#amount / 100
    //}

    set username(newUsername) {
        if (typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            console.log('Erro!, tente novamente')
        }
        
    }

    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount )

myWallet.username = "João"
console.log(myWallet.username)

myWallet.username += " Victor"
console.log(myWallet.username)

myWallet.username = true
console.log(myWallet.username)