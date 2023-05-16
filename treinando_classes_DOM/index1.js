//Inportação das classes
import { Component } from "./Component.js"
import { Form } from "./Forms.js"
import { Input } from "./input.js"
import { Label } from "./Label.js"

//Cria uma nova instância da classe "Component" com a tag "h1", adicionando-a como filho do elemento "body"
const title = new Component ('h1' , 'body', { textContent: 'Ola, mundo!'})
console.log(title)
//Adiciona o elemento criado à página
title.render()
//Altera a tag do elemento para h3
title.tag = 'h3'
//Reconstroi o elemento com a nova tag
title.build()
//Adiciona o elemento com a nova tag
title.render()
//Cria uma nova instância da classe "Form" e adiciona-a como filho do elemento "body"
const form = new Form('body')
//Cria uma nova instância da classe "Label" com o texto "Nome:" e adiciona-a como filho do elemento "form". Define o atributo "for" com o valor "nameInput"
const label = new Label('Nome: ', form, { htmlFor: 'nameInput' })
//Cria tambem uma instância "Input" e adiciona como filho de "form"
const input = new Input(form, {id: 'nameInput', name: 'name' })
//Adiciona o formulário
form.render()
//Adiciona o rótulo
label.render()
//Adiciona o elemento "input" ao formulário
form.addChildren(input)
//Adiciona dois elementos "br", um rótulo com o texto "Data de nascimento" e um elemento "input" do tipo "date" com o atributo "id" e o atributo "name"
form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de nascimento:' , form, {htmlFor: 'birthdayInput'}),
    new Input(form, {id: 'birthdayInput', name: 'birthday', type: 'date'})
)