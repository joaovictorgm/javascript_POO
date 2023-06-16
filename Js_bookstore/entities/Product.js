// todos os métodos por padrão deverá ser privados do que público para evitar inconsistências no código, mas por ser um exercício este será público.

//Define a exportação do módulo e declara uma classe chamada "Product"
module.exports = class Product {
//Define o construtor da classe "Product" com quatro parâmetros: name, description, price e inStock
    constructor(name, description, price, inStock = 0) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }
//Define um método público chamado "addToStock" que recebe um parâmetro "qauntity"
    addToStock(quantity) {
    //Incrementa a propriedade "inStock" do objeto com o valorde "quantity"
        this.inStock += quantity
    }
//Define um método público chamado "remvedFromStock" que recebe um parâmetro "quantity"
    removedFromStock(quantity) {
// Decrementa a propriedade "inStock" do objeto com o valor de "quantity"
        this.inStock -= quantity
    }
}