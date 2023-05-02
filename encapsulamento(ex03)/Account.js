class Account {
    #password
    #balance = 0 //O encapsulamento fica dentro da classe e fora do construtor 

    constructor(user) {
        this.email = user.email
        this.#password = user.password
       
    }
    //para retornar um valor privado pode ser usado métodos
    getBalance(email, password) {
        if(this.email === email && this.#password === password) {
        return this.#balance
        } else {
            return null
        }
  }

  #authenticate(email, password) {
      return this.email === email && this.#password === password
}
}

const user = {
    email: "joaovictor@email.com",
    password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)

console.log(myAccount.getBalance("joaovictor@email.com", "123456"))