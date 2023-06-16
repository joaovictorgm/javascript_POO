//Define a exportação do módulo e declara uma classe chamada "Database"
module.exports = class Database {
    //Declara uma propriedade privada chamada "#storage" que armazena os dados do banco de dados
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
  }
    //Define um método chamado "find" que recebe uma chave (key)
    //e retorna o valor correspondente no armazenamento
 find(key) {
    return this.#storage[key]
  } 
    //Define um método chamado "findBookByName" que recebe o nome de um livro (bookName)
    // e adiciona o autro ao armazenamento de autores
  saveAuthor(author) {
      this.#storage.authors.push(author)
  }
    //Define um método chamado "findBookByName" que recebe o nome de um livro (bookName)
    // e retorna o livro correspondente no armazenamento de livros
  findBookByName(bookName) {
      return this.#storage.books.find(b => b.name === bookName)
  }
    //Define um método chamado "findBookByName" que recebe um objeto "book"
    //e adiciona o livro ao armazenamento de livros, se ele ainda não existir
  saveBook(book) {
      const bookExists = this.findBookByName(book.name)
      if(!bookExists) [
          this.#storage.books.push(book)
      ]
  }
      //Define um método chamado "addBooksToStock" que recebe o nome de um livro (bookName) e a quantidade (quantity)
      //e adiciona a quantidade ao estoque do livro correspondente no armazenamento
  addBooksToStock(bookName, quantity) {
      const book = this.findBookByName(bookName)
      book?.addToStock(quantity)
  }
//Define um método chamado "removeBooksFromStock" que recebe o nome de um livro (bookName) e a quantidade (quantity)
// e remove a quantidadedo estoque do livro correspondente no armazenamento
  removeBooksFromStock(bookName, quantity) {
      const book = this.findBookByName(bookName)
      book?.removedFromStock(quantity)
  }
 //Define um método chamado "findPosterByName" que recebe o nome de um pôster (posterName)
     // e retorna o pôster correspondente no armazenamento de pôsteres
  findPosterByName(posterName) {
    return this.#storage.posters.find(p => p.name === posterName)
}
 //Define um método chamado "savePoster" que recebe um objeto "poster"
 // e adiciona o pôster ao armazenamento de pôsteres, se ele ainda não existir
  savePoster(poster) {
    const posterExists = this.findPostersByName(poster.name)
    if(!posterExists) [
        this.#storage.posters.push(poster)
    ]
}
 //Define um método chamado "addPostersToStock" que recebe o nome de um  pôster (posterName) e aquantidade (quantity) e adiciona a quantidade ao estoque do põster correspondente no armazenamento
addPostersToStock(posterName, quantity) {
    const poster = this.findPostersByName(posterName)
    poster?.addToStock(quantity)
}
//Define um método chamado "removePostersFromStock" que recebe o nome de um põster (posterName) e a quantidade(quantity) e remove a quantidade do estoque do põster correspondente no armazenamento
removePostersFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName)
    poster?.removeFromStock(quantity)
}
//Define um método chamado "saveUser" que recebe um objeto "user" e adiciona o usuário ao armazenamento de usuários, se ele ainda não existit
saveUser(user){
    const userExists = this.#storage.users.find(u => u.email === user.email)
    if (!userExists) [
        this.#storage.users.push(user)
    ]
}
//Define um método chamado "saveOrder" que recebe um objeto "order" e adiciona o pedido ao armazenamento de pedidos
saveOrder(order){
    this.#storage.orders.push(order)
}

//Defineum método chamado "!showStorage" que exibe o estado atual do armazenamento
showStorage() {
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))

    }

}

