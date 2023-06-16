// Importa o módulo "Product" a partir do arquivo "./Product"
const Product = require("./Product");

// Define a exportação do módulo e declara uma classe chamada "Poster" que herda da classe "Product"
module.exports = class Poster extends Product {
    // Define o construtor da classe "Poster" com seis parâmetros: name, description, height, width, price e inStock
    constructor(name, description, height, width, price, inStock = 0){
        //Chama o construtor da classe pai (Product) usando a função "super" e passa os parâmetros "name", "description", "price" e "inStock"
        super(name, description, price, inStock)
        this.height
        this.width
    }
}