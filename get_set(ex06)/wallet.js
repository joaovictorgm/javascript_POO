// método get

class Wallet {
    //Declaração deduas variáveis privadas da classe: `#amount` e `#username`. O uso de `#` indica que essas variáveis são privadas e só podem ser acessadas dentro da classe.
    #amount
    #username
    //Definição do construtor da classe. Quando um objeto `Wallet` é criado, o construtor é chamado. Neste caso. o construtor inicializa a variável `#amount` com o valor `100.99 * 100`, o que resulta em `10099` (mudança para inteiro) em seguida, imprime o valor de `this.#amount`, que é `10099`
    constructor() {
        this.#amount = 100.99 *  100 // regra para mudar o número para inteiro
        console.log(this.#amount)
    }
    //Esse getter retorna o valor de `this.#amount / 100`, que é `100.99`. Isso significa que, ao acessar `myWallet.amount`, o valor retornado será `100.99`.
    get amount() {
        return this.#amount / 100
    }
    //função normal
   // amount() {
        //return this.#amount / 100
    //}
    //Esse setter recebe um novo valor para `username` e verifica se é uma string. Se for uma string, atribui o novo valor a `this.#username`. Caso contrário, imprime "Erro! Tente novamente"
    set username(newUsername) {
        if (typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            console.log('Erro!, tente novamente')
        }
        
    }
    //Getter para retornar o valor
    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount )

myWallet.username = "João"
console.log(myWallet.username)

myWallet.username += " Victor" // += é concatenação
console.log(myWallet.username)

myWallet.username = true
console.log(myWallet.username)