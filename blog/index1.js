const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Titulo do psot", "Lorem ipsum dolor sic...")

post.addComment("João", "Legal!")
post.addComment("Victor", "Interessante.")

console.log(john)
console.log(post)