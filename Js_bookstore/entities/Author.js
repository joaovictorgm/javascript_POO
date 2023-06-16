//Define a exportação do módulo e declara uma classe chamada "Author"
module.exports = class Author {
    //Define o construtor da classe "Author" com três parâmetros: name,nationality e bio
    constructor(name , nationality, bio) {
    //Atribui o valor do parâmetro "name" à propriedade "name" do objeto
        this.name = name
        this.nationality = nationality
        this.bio = bio
    }
}