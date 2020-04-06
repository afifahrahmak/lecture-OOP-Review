let fs = require('fs')
let file = fs.readFileSync('./Data/data.json', 'utf8')
let data = JSON.parse(file)
let FarmHouse = require('./Model/farmHouse')

// build a Ranch based on data
let deRanch = FarmHouse.createRanch(data)

FarmHouse.growField(deRanch)
FarmHouse.getReport(deRanch, 6)
