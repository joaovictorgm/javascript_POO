
// Importa a classe `App` do arquivo 'App.js'
const App = require('./App')
// Cria uma instância da classe `App´
const app = new App()
// Cria autores usando o método `createAuthor`da classe `App`
app.createAuthor('Norihiro Yagi', 'Japanese', '...')
app.createAuthor('Kentaro Miura', 'Japanese', '...')
// Obtém os autores usando o método `getAuthors` da classe `App`
const authors = app.getAuthors()
// Cria livros usando o método `createBook` da classe `App`
app.createBook('Berserk 41', '...', 'seinen', 230, authors[1], '...', 34.90, 9)
app.createBook('Claymore 01', '...', 'seinen',90, authors[0], '...', 29.90, 12 )
app.createBook('Berserk 25', '...', 'seinen', 230, authors[1], '...', 34.90, 5)
app.createBook('Claymore 11', '...', 'seinen', 90, authors[0], '...', 29.90, 3)
// Obtém os livros usando o método `getBooks` da classe `App`
const books = app.getBooks()
// Cria um usuário usando o método `createUser`da classe `App`
app.createUser('João Victor', 'joao@email.com', '123456')
//Obtém os usuários usando o método `getUsers` da classe `App`
const users = app.getUsers()
//Exibe o estado atual do armazenamento do banco de dados usando método `showDatabase`da classe `App´
app.showDatabase()
//Cria um array de objetos `items`, cada um contendo um produto e sua quantidade
const items = [
    {
        product: books[3],
        quantity: 2
    },

    {
        product: books[1],
        quantity: 3
    },
    {
        product: books[0],
        quantity: 1
    }
]
//Cria um pedido usando o método `createOrder`da classe `App`
app.createOrder(items, users[0])
//Exibe o estado atual do armazenamento do banco de dados novamente
app.showDatabase()