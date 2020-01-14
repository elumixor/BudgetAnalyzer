const moment = require('../lib/moment')

const d1 = new moment('01.01.2010', 'DD.MM.YYYY')
const d2 = new moment('02.01.2010', 'DD.MM.YYYY')

console.log(d1)
console.log(d2)

console.log(d1 > d2)