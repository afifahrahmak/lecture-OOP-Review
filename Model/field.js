class Field {

  constructor(name) {
    this.name = name
    this._animals = []
  }

  get animals() {
    return this._animals
  }

  addAnimal(animal) {
    this._animals.push(animal)
  }

  harvest() {
    let totalProduct = 0
    this._animals.forEach((animal, i) => {
      animal.harvest()
      totalProduct += animal.harvested.good
    });
    return `you have ${this._animals.length} ${this._animals[0].name}(s) in your ${this.name} with ${totalProduct} product`
  }
}

class Barn extends Field {
  constructor(name) {
    super(name)
  }
}

class Coop extends Field {
  constructor(name) {
    super(name)
  }
}

module.exports = { Barn, Coop }