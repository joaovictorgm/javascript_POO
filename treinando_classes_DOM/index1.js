import { Component } from "./Component.js"
import { Form } from "./Forms.js"
import { Input } from "./input.js"
import { Label } from "./Label.js"

const title = new Component ('h1' , 'body', { textContent: 'Ola, mundo!'})
console.log(title)
title.render()

title.tag = 'h3'

title.build()
title.render()

const form = new Form('body')

const label = new Label('Nome: ', form, { htmlFor: 'nameInput' })
const input = new Input(form, {id: 'nameInput', name: 'name' })

form.render()
label.render()

form.addChildren(input)

form.addChildren