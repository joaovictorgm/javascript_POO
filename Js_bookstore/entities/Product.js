// todos os métodos por padrão deverá ser privados do que público para evitar inconsistências no código, mas por ser um exercício este será público.

module.exports = class Product {
    constructor(name, description, price, inStock = 0) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    removedFromStock(quantity) {
        this.inStock -= quantity
    }
}