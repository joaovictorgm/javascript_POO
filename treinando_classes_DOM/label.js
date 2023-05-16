import { Component } from "./Component.js";

export class Label extends Component {
    //Este comando chama o construtor da classe "Component" com três argumentos:"label" (a tag do elemento), "parent" e um objeto que mescla as opções fornecidas com um objeto que tem uma propriedade "textContent" definida como "Text"
    constructor(text, parent, options) {
        super('label', parent, Object.assign({}, options, { textContent:text }))
    }
}