//Define a exportação do módulo e declara uma classe chamada "Order"
module.exports = class Order {
    // Declara duas propriedades, "#total" e "#items", e uma propriedade privada chamada "#user"
    #total
    #items
    #user
    
    // Define o construtor da classe "Order" com dois parâmetros: items e user
    constructor(items, user) {
        // Itera sobre cada item do array "items"
        items.forEach(({ product, quantity}) => {
            // Verifica se a quantidade solicitada é maior do que a quantidade disponível em estoque do produto
            if (quantity > product.inStock) {
            // Lança um erro com a mensagem 'Quantidade insuficiente em estoque!'
                throw new Error('Quantidade insuficiente em estoque!')
            }
        })
        // Atribui o valor do parâmetro "items" à propriedade privada "#items" do objeto
        this.#items = items
        // Atribui o valor do parâmetro "user" à propriedade privada "#user" do objeto
        this.#user = user
        // Calcula o valor total do pedido
        this.#total = items.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0)
    }
        // Define um getter chamado "data"
    get data() {
        //Retorna um objeto contendo as propriedades "#items", "#user" e "#total"
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}