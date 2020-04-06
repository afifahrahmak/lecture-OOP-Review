// REVIEW OOP

let Egg = require('./product').Egg
let Milk = require('./product').Milk

// let { Egg, Milk } = require('./product') => second option fo importing data

class Animal {
  constructor(name, age, weight, matureAge, maxWeight) {
    this._name = name
    this._age = age
    this._weight = weight
    this._matureAge = matureAge
    this._maxWeight = maxWeight
    this._healthStatus = true
    this._products = []
    this._harvested = {}
  }
  get name() {
    return this._name
  }

  get age() {
    return `${Number(this._age.toFixed(1))} m.o`
  }

  get weight() {
    return `${Number(this._weight.toFixed(2))} kg`;
  }

  get healthStatus() {
    return this._healthStatus
  }
  get products() {
    return this._products
  }

  get harvested() {
    return { good: this._harvested.good, msg: `${this._harvested.count} (${this._harvested.good} good, ${this._harvested.bad} bad)` }
  }

  getWeightInKg() {
    return Math.min(this._age * 0.3, this._maxWeight);
  }

  grow() {
    this._age++
    this._weight += this.getWeightInKg()
    if (this._weight >= this._maxWeight) {
      this._weight = this._maxWeight
      this._healthStatus = false;
    }
    if (this._age >= this._matureAge) {
      return this.produce()
    }
  }

  produce() {
    for (let i = 0; i < Math.round((Math.random() * 15) + 30); i++) {
      let product = new Product('name')
      this._products.push(product)
    }
    return ''
  }

  harvest() {
    let good = 0, bad = 0
    this._products.forEach(product => {
      if (product.quality == 'good') good++
      else bad++
    });
    this._harvested = { good, bad, count: this._products.length }
    this._products = []
  }

}

class Chicken extends Animal {
  constructor(age, weight) {
    super('Chicken', age, weight, 3, 5)
  }

  produce() {
    for (let i = 0; i < Math.round((Math.random() * 15) + 30); i++) {
      let product = new Egg()
      this._products.push(product)
    }
  }
}

class Cow extends Animal {
  constructor(age, weight) {
    super('Cow', age, weight, 5, 80)
  }

  produce() {
    for (let i = 0; i < Math.round((Math.random() * 15) + 30); i++) {
      let product = new Milk()
      this._products.push(product)
    }
  }
}

module.exports = { Chicken, Cow }

