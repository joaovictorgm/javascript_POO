
//criando uma classe
class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }
   //métodos
    publish() {
        this.published = true
    }

}
// instânciar é o ato de criar uma instância
const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.publish()

console.log(eragon)
console.log(eldest)
//instanceof verifica se "eragon" é uma instância de "Book"
console.log(eragon instanceof Book)