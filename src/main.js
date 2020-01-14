handleCSV = file => csvReader.readAsText(file)
handleConfig = file => configReader.readAsText(file)

const expenses = []

const categoryRoot = new Category("root")
const uncategorized = new Category("Uncategorized")

let selectedRoot = categoryRoot
categoryRoot.addChild(uncategorized)

const categoriesRootElement = document.getElementById('categories-root')
const uncategorizedElement = new CategoryElement(uncategorized, categoriesRootElement)
const categoryElements = [uncategorizedElement]

const expenseElements = []

updateExpenses = _expenses => {
    _expenses.sort((a, b) => a.date < b.date ? -1 : 1)
    expenses.push(..._expenses)
    _expenses.forEach(e => {
        e.category = uncategorized
        const expenseElement = new ExpenseElement(e)
        uncategorizedElement.addExpenseElement(new ExpenseElement(e))
        expenseElements.push(expenseElement)
    })

    const datasets = constructDatasets(selectedRoot, expenses)

    uncategorizedElement.expand()

    updateGraph(datasets)
}


updateConfig = (categoryRoot, expnenses) => {
    console.log(categoryRoot)
    console.log(expnenses)
}