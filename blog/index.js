//Classe Author com o nome do autor e um array de posts criados pelo autor

class Author {
    constructor(name) {
        this.name = name; // Nome do autor do posts
        this.posts = []; // Array de posts  criados pelor autor
    }
// Método para criar um novo post com o autor atual
    createPost(title, content) {
        const post = new Post(title, content, this); // Cria uma nova instância da classe Post
        this.posts.push(post); //Adiciona o post criado ao arrayde posts do autor
        return post; // Retorna o post criado
    }   
}

// Classe Post
class Post {
    constructor(title, content, author) {
        this.title = title;// Título do post
        this.content = content; // Conteúdo do post
        this.author = author; // Autor do post
        this.comments = []; // Array de comentários do post
    }

    //Método para adicionar um comentário ao post
    addComment(content) {
         const comment = new Comment(content);// Cria uma nova instância da classe Comment
         this.comments.push(comment); // Adiciona o comentário criado ao array de comentários do post 
         return comment;
        }    
          
}

class Comment {
    constructor(content){
        this.content = content;
  }
}

//Criação de um autor e de um post com cometário

const author = new Author("João")
const post = author.createPost("Título do post", "Conteúdo do post")
const comment = post.addComment("Comentário sobre o post")

console.log(author)
console.log(post)
console.log(comment)