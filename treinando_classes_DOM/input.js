import { Component } from "./Component.js";

export class Input extends Component {
    //Define o construtor da classe "input", que recebe dois parâmetros:"parent" e "options"
    constructor(parent, options) {
        //chama o construtor da classe "Component" com três argumentos: "input" (a tag do elemento),"parent" e "options"
        super('input', parent, options)
    }
}