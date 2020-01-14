const csvReader = new FileReader();
const configReader = new FileReader();

let updateExpenses = () => {
}
let updateConfig = () => {
}

csvReader.onload = e => {
    // By lines
    let lines = e.target.result.split('\n');
    const expenses = lines.slice(1, lines.length - 1).map(l => {
        const [date, name, money] = parseCSVLine(l)
        return new Expense(date, name, money)
    })

    updateExpenses(expenses)
};

configReader.onload = e => {
    // todo: read when file layout is configured

    updateConfig(categoryRoot, expenses)
}