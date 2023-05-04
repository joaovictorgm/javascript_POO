
// Classe genérica para um elemento do DOM
class Component {
// Atributo privado para armazenar a referência ao elemento do DOM
    #element;

    // Construtor da classe, recebe uma tagname para criar o elemento
    constructor(tagName) {
        // Cria um novo elemento do DOM com a tagname especificada
        this.#element = document.createElement(tagName;)
    }

    // Método de acesso para ler o valor do atributo #element
    get element() {
        return this.#element;
    }

    // Método para criar o elemento, deve ser chamado no construtor
    build() {
        return this.#element;
    }

    //Método para adicionar o elemento na página
    render(target) {
        target.appendChild(this.#element);
    }
}

//Classe especifica para elementos input, que deve ser uma subclasse da classe Component.
class InputComponent extends Component {
    constructor() {
        // Chama o construtor da classe Component com a tagname 'input'
        super('input');
    }
}

// Classe especifica para elementos label, que deve ser uma subclasse da classe Component
class LabelComponent extends Component {
    constructor(text) {
        // Chama o construtor da classe Component com a tagname 'label'
        super('label');
        //Define o conteúdo de texto do elemento  com o parâmetro fornecido
        this.#element.textContent = text;
    }  
}

// Classe especifica para elementos form, que deve uma subclasse Component
class FormComponent extends Component {
    constructor() {
        // Chama o construtor da classe Component com a tagname 'form'
        super('form');
    }
    // Método para adicionar elementos  como filhos 
    addChild(child)  {
        //Adiciona o elemento filho ao elemento do formulário 
    }
}