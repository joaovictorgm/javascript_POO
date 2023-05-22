class Character {
    constructor(name, lifePoints, attackPoints, defensivePoints){
        this.name = name;
        this.lifePoints = lifePoints;
        this.attackPoints = attackPoints;
        this.defensivePoints = defensivePoints;
    }

    hit(target) {
        const difference = this.attackPoints - target.defensivePoints;
        target.lifePoints -= difference;
        console.log(`${this.name} atacou ${target.name} e causou ${difference} pontos de dano.`)
    }

}

class Thief extends Character {
    constructor(name, lifePoints, attackPoints, defensivePoints){

    }


hit(target) {
    const difference = 2 * (this.attackPoints - target.defensivePoints);
    target.lifePoints -= difference;
    console.log)(`${this.name} atacou ${target.name} e caousou ${difference} pontos de dano.`)
}

}
class Mage extends Character {
    constructor(name, lifePoints, attackPoints, defensivePoints, magicPoints) {
        super(name, lifePoints, attackPoints,defensivePoints);
        this.magicPoints = magicPoints;
    }

    hit(target) {
        const difference = this.attackPoints + this.magicPoints - target.defensivePoints;
        target.lifePoints -= difference;
        console.log(`${this.name} atacou ${target.name} e causou ${difference} pontos de dano.`)
    }
    heal(target) {
        const healPoints = 2 * this.magicPoints;
        target.lifePoints += healPoints;
        console.log(`${this.name} curou ${target.name} e aumentou ${healPoints} pontos de vida.`)
    }
} 

class Warrior extends Character {
    constructor(name, lifePoints, attackPoints, defensivePoints, shieldPoints ){
        super(name, lifePoints, attackPoints,defensivePoints);
        this.shieldPoints = shieldPoints;
        this.position = 'ataque'; //Começa na posição de ataque
    }

    hit(target) {
        if (this.position === 'ataque') {
            const defensivePoints = this.position === 'defesa'
        }
    }
}