class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }
     
    calculateDiscount(discountPercentage) {
    const discountAmount = (discountPercentage /  100) * this.price
    const discountedPrice = this.price - discountAmount
    return discountedPrice
    }  
}

const phone = new Product("phone", "Celular portátil", 50)
phone.addToStock(10)
const priceWithDiscount = phone.calculateDiscount(15)

console.log(phone)
console.log(priceWithDiscount)
console.log(phone.calculateDiscount)