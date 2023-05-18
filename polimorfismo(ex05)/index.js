
// A classe base Vehicle, possui um método chamado 'move()' que imprime a mensagem "O veiculo está se mobendo." no console.
class Vehicle {
    move() {
        console.log("O veiculo está se movendo.")
    }

}
// A classe 'Car' substitui o método 'move()' da classe base e imprime a mensagem "O carro está se movendo." no console.
class Car extends Vehicle {
    move() {
        console.log("O carro está se movendo.")
    }
}
//A classe 'Ship' que também herda da classe 'Vehicle'. A classe 'Ship' substitui o método 'move()' da classe base e imprime a mensaem "O navio está navegando." no console.
class Ship extends Vehicle {
    move() {
        console.log("O navio está navegando.")
    }
}
//A classe 'Aircraft' possui um métod 'move(speed') que recebe uma velocidade como parâmetro e imprime a mensagem "A aeronave está voando a {speed} km/h." no console.
class Aircraft extends Vehicle {
    move(speed) {
        console.log(`A aeronave está voando a ${speed} km/h.`)
    }
}
//'delorean', 'blackPearl' e 'epoch' são instâncias de 'Car', 'Ship' e 'epoch'
const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

// delorean.move()
// blackPearl.move()
// epoch.move(80)

function start(vehicle) {
    console.log("Iniciando um veículo...")
    vehicle.move()
}
//A função 'start()' é chamada três vezes com diferentes objetos: 'delorean', 'blackPearl' e 'epoch'. Cada chamada imprime uma mensagem específica de acordo com o tipo de veículo.
start(delorean)
start(blackPearl)
start(epoch)