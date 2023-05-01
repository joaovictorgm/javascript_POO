const Post = require("./Post")

class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    writePost(title, body){
        const post = new Post(title, body, this)//this faz passar todo o objeto para a classe do post
        this.posts.push(post)
        return post
    }
}

module.exports = Author