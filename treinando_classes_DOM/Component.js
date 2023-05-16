// O export torna a classe "Component" dísponivel para outros módulos do projeto.
//A "class Component" define a classe Component
// O "#" indica que esta é uma propriedade privada da classe. O "element" é iniciado com nulo.
export class Component {
    #element = null
    // O construtor é chamado quando um novo objeto Component é criado. Ele espera três parâmetros: tag, parent e options
    // "tag" é uma string que representa a tag HTML a ser criada. "parent" é uma string que representa o seletor CSS do elemento pai no qual o elemento criado será anexado.
    // "options" é um objeto que contém propriedades e valores para serem atribuídos ao elemento criado
    // O método "build()" é chamdo dentro do construtor para construir para construir o elemento
    constructor(tag, parent,options) {
        //Aqui as mesmas propriedades são definidas com o valor do parâmetro
        this.tag = tag
        this.parent = parent 
        this.options = options
        //O "build()" é chamado para construir o elemento
        this.build()
    }
    //Aqui retorna a propriedade "element" é támbem a propriedade privada "element"
    getElement() {
        return this.#element
    }
    //Este método cria um novo elemento HTML usando tag especificada no construtor.
    //A propriedade privada "element" é atualizada com referência ao novo elemento criado
    //O método "Object.assign()" é usando para copiar todas as propriedades do objeto "options" para o elemento criado
    //Object.assign() é usada para copiar os valores das propriedades enumáreveis de um ou mais objetos de origem para um objeto de destino
    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
    }
    //O método "render()"" adiciona o elemento criado como um filho do elemento pai especificado no construtor.
    // Se o pai é uma instância de Component, o elemento criado é adicionado ao elemento pai usando o método "getElement()" da instância pai.
    //No contrário seleciona o elemento pai usando o seletor CSS especificado no construtor e adiciona o elemento criado com um filho desse elemento pai.

    render() {
        if (this.parent instanceof Component) {
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}



