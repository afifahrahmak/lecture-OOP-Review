let { Barn, Coop } = require('./field')
let Chicken = require('./animal').Chicken
let Cow = require('./animal').Cow

class FarmHouse {

  static createRanch(options) {
    let ranch = []
    options.forEach(option => {
      if (option.animalType == 'mammals') {
        let field = FarmHouse.createField('barn', option.animals[0].name)
        option.animals.forEach(animal => {
          let baby = FarmHouse.createAnimal(animal.name, animal.age, animal.weight)
          field.addAnimal(baby)
        })
        ranch.push(field)
      } else if (option.animalType == 'poultry') {
        let field = FarmHouse.createField('coop', option.animals[0].name)
        option.animals.forEach(animal => {
          let baby = FarmHouse.createAnimal(animal.name, animal.age, animal.weight)
          field.addAnimal(baby)
        })
        ranch.push(field)
      }
    })
    return ranch
  }

  static createField(name, animal) {
    if (name == 'barn') {
      return new Barn(`${animal}Barn`)
    } else if (name == 'coop') {
      return new Coop(`${animal}Coop`)
    }
  }

  static createAnimal(name, age, weight) {
    if (name == 'chicken') {
      return new Chicken(age, weight)
    } else if (name == 'cow') {
      return new Cow(age, weight)
    }
  }

  static growField(ranch) {
    ranch.forEach(field => {
      field.animals.forEach(animal => {
        animal.grow();
      })
      console.log(`your ${field.name} has grow`)
    })
    return ''
  }

  static getReport(ranch, months) {
    for (let i = 0; i <= months; i++) {
      console.log(`\n`)
      FarmHouse.growField(ranch)
      ranch.forEach(field => {
        console.log(`[ ${field.name} Month ${i} Report] ${field.harvest()}`)
      })
    }
  }

}

module.exports = FarmHouse