const account = require('./Account')
//Define a exportação do módulo e declara uma classe chamada "User"
module.exports = class User {
//Define o construtor da classe "User" com três parâmetros: name, email e password
    constructor(name, email, account) {
//Atribui o valor do parâmetro "name" à propriedade "name" do objeto
        this.name = name
        this.email = email
        this.account = account
    }
}