class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if (this.email === email && this.password === password){
            console.log("Login com sucesso!")
        } else {
            console.log("Erro no login")
        }

    }

}

const john = new User("John Doe" , "john@email.com", "1234")

john.login("john@email.com", "1234")