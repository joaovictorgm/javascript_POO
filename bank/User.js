//importação do módulo account
const Account = require('./Account')
//exportando a classe User para ser usada em outros arquivos
module.exports = class User {
//Dois parâmetros "fullName" e "email". Esses parâmetros são usados para definir as propriedades "fullName" e "email" do objeto "User".
//Dentro do construtor é criada uma instância da classe "Account", passando o objeto "User" como argumento. Essa instância é armazenada na propriedade "account" do objeto "User"
    constructor(fullName, email) {
        this.fullName = fullName
        this.email = email
        this.account = new Account(this)
    }
}