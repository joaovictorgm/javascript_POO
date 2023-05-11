// O export torna a classe "Component" dísponivel para outros módulos do projeto.
//A "class Component" define a classe Component
// O "#" indica que esta é uma propriedade privada da classe. O "element" é iniciado com nulo.
export class Component {
    #element = null
    // O construtor é chamado quando um novo objeto Component é criado. Ele espera três parâmetros: tag, parent e options
    constructor(tag, parent,options) {
        this.tag = tag
        this.parent = parent 
        this.options = options
        this.build()
    }

    getElement() {
        return this.#element
    }

    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
    }

    render() {
        if (this.parent instanceof Component) {
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}



