class Product {
  constructor(name) {
    this._name = name
    this._quality = this.getQuality()
  }
  get name() {
    return this._name
  }

  get quality() {
    return this._quality
  }

  getQuality() {
    let random = Boolean(Math.round(Math.random() * 3))
    if (random) {
      return 'good'
    } else {
      return 'bad'
    }
  }
}

class Egg extends Product {
  constructor() {
    super('Egg')
  }
}

class Milk extends Product {
  constructor() {
    super('Egg')
  }
}

module.exports = { Egg, Milk }