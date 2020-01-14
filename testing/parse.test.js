const moment = require('../lib/moment.js')
const p = require('../src/parsing.js')

const str =
    '"22.04.2019";' + // this (0)
    '"24.04.2019 09:22";' +
    '"8466941001/5500";' +
    '"Vladyslav Yazykov";' +
    '"Platba kartou";' +
    '"516872XXXXXX0768";' +
    '"";' +
    '"Platba kartou";' +
    '"MCDONALDS 37 HOLESO; PRAHA 7; CZE";' + // this (8)
    '"MCDONALDS 37 HOLESO; PRAHA 7; CZE";' +
    '"";' +
    '"1178";' +
    '"";' +
    '"-237,00";' + // this (13)
    '"CZK";' +
    '"";' +
    '"";' +
    '"0,00";' +
    '"3489669300";' +
    '"";' +
    '"";' +
    '""'

const description = 'Datum provedení;' +
    'Datum zaúètování;' +
    'Èíslo úètu;' +
    'Název úètu;' +
    'Kategorie transakce;' +
    'Èíslo protiúètu;' +
    'Název protiúètu;' +
    'Typ transakce;' +
    'Zpráva;' +
    'Poznámka;' +
    'VS;KS;SS;' +
    'Zaúètovaná èástka;' +
    'Mena úctu;' +
    'Pùvodní èástka a mena;' +
    'Pùvodní èástka a mìna;' +
    'Poplatek;' +
    'Id transakce;' +
    'Vlastní poznámka;' +
    'Název obchodníka;' +
    'Mìsto\n'

console.log("parsing")

function parseCSVLine(str) {
    const separated = str.split('";"')

    const date = moment(separated[0].substr(1), 'DD.MM.YYYY')
    const name = separated[8]
    const money = parseFloat(separated[13])

    return [date, name, money]
}

const [date, name, money] = parseCSVLine(str)

console.log(`important:\n\t${date}\n\t${name}\n\t${money}`)
