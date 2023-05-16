import { Component } from "./Component.js";

export class Form extends Component {
    constructor(parent, options) {
        //Chama o construtor da classe "Component" com a tag "form", o elemento pai "parent" e as opções "options"
        super('form' , parent, options)
    }
//Este comando define um método chamado "addChildren" que usa a sintaxe de parâmetro rest("...children") para aceitar um número variável de argumentos
    addChildren(...children) {
        //Este comando inicia um loop "forEach" que itera sobre cada um dos argumentos passados para o método "addChildren"
        children.forEach(child => {
            //Este comando usa o método "getElement()" para obter o elemento DOM do componente pai, e então usa o método "appendChild()" para adicionar o ele,emto DOM do componente filho
            this.getElement().appendChild(child.getElement())
        })
    }
}