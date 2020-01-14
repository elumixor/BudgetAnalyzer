function parseCSVLine(str) {
    const separated = str.split('";"')

    const date = moment(separated[0].substr(1), 'DD.MM.YYYY')
    const name = separated[8]
    const money = Math.round(parseFloat(separated[13].replace(/ /g, '').replace(',', '.')))

    return [date, name, money]
}
