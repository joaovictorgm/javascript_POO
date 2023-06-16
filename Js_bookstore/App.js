//Importa os módulos atraves dos arquivos correspondentes
const Database = require("./Database")
const Author = require("./entities/Author")
const User = require("./entities/User")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")

// Define a exportação do módulo e declara uma classe chamada "App"
module.exports = class App {
// Declara uma propriedade privada chamada "#database" e a instancia com um novo objeto da classe "Database"
    static #database = new Database()
// Define um método estático chamado "createUser" que recebe três parâmetros: name, email e password
    createUser(name, email, password) {
// Cria uma nova instância daclasse "User" passando os parâmetros recebidos
        const user = new User(name, email, password)
//Chama o método "saveUser" do objeto de banco de dados para salvar o usuário
        App.#database.saveUser(user)
    }
// Define um método estático chamado "getUsers"
    getUsers() {
// Chama o método "find" do objeto de banco de dados para buscar os usuários
       return App.#database.find('users')
    }
// Define um método estático chamado "createAuthor" que recebe três parâmetros: name, nationality e bio
    createAuthor(name, nationality, bio) {
        // Cria uma nova instância da classe "Author" passando os parâmetros recebidos 
        const author = new Author(name, nationality, bio)
        // Chama o método "saveAuthor" do objeto de banco de dados para salvar o autor
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        // Chama o método "find" do objeto de banco de dados para buscar os autores
        return App.#database.find('authors') 

    }
//Define um método estático chamado "createBook" que recebe oito parâmetros: title, synopsis, genre, pages, author, description, price e inStock
    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        // Chama o método "saveBook" do objeto de banco de dados para salvar o livro
        App.#database.saveBook(book)
    }
//Define um método estático chamado "addBook" que recebe dois parâmetros: bookName e quantity
    addBook(bookName, quantity) {
        // Chama o método "addBooksToStock" do objeto de banco de dados para adicionar livros ao estoque
        App.#database.addBooksToStock(bookName, quantity)
    }

    getBooks() {
        return App.#database.find('books')
    }
// Define um método estático chamado "createPoster" que recebe seis parâmetros: name, description, height, width, price e inStock
    createPoster(name, description, height, width, price, inStock) {
        //Cria uma nova instância da classe "Poster" passando os parâmetros recebidos
        const poster = new Poster(name, description, height, width, price, inStock)
        //Chama o método "saveBook" do objeto de banco de dados para salvar o pôster
        App.#database.saveBook(poster)
    }
// Define um método estático chamado "addPoster" que recebe dois parâmetros: posterName e quantity
    addPoster(posterName, quantity) {
        //Chama o método "addPostersToStock"do objeto de banco de dados para adicionar pôsteres ao estoque
        App.#database.addPostersToStock.apply(posterName, quantity)
    }

    getPosters() {
        //Chama o método "find" do objeto de bancode dados para buscar os pôsteres
        return App.#database.find('posters')
    }
//Define um método estático chamado "createOrder" que recebe dois paãmetros: items e user
    createOrder(items, user) {
        //Cria uma nova instância da classe "Order" passando os parâmetros recebidos
        const order = new Order(items, user)
        //Chama o método "saveOrder" do objeto de banco de dados para salvar o pedido
        App.#database.saveOrder(order)
       //Itera sobre os itens do pedido e verifica se são livros ou pôsteres para remover do estoque correspondente
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock(product.name, quantity)
            }
        })      
        
    }

    // Define um método estático chamado "getOrders"
    getOrders() {
        //Chama o método "find" do objeto de banco de dados para buscar os pedidos
        return App.#database.find('orders')
    }
    //Define um método estático chamado "showDatabase"
    showDatabase () {
        // Chama o método "showStorage" do objeto de banco de dados para exibir o estado atual do armazenamento
        App.#database.showStorage()
    }
}

//Os métodos servem para definir comportamentos ou utilitários relacionados à classe em si, e não a instâncias individuais da classe. Eles são acessados pro meio da classe em vez de uma instância e podem ser usados para executar cálculos, fornecer funcionalidades gerais ou criar métodos de fábrica para a classe.