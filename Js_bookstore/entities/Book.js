const Product = require("./Product");

// Defina a exportação do módulo e declara uma classe chamada "Book" que herda da classe "Product"
module.exports = class Book extends Product {
    //Define o construtor da classe "Book" com oito parâmetros: title, synopsis, genre, pages, author, description, price e inStock
    constructor(title, synopsis, genre, pages, author, description, price, inStock = 0) {
    //Chama o construtor da classe pai (Product) usando a função "super" e passa os parâmetros "Livro: title", "description", "price" e "inStock"
        super(`Livro: ${title}`, description, price, inStock)
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}