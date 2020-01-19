handleCSV = file => csvReader.readAsText(file)
handleConfig = file => configReader.readAsText(file)

const expenses = []

const categoryRoot = new Category("root")
const uncategorized = new Category("Uncategorized")

let selectedRoot = categoryRoot
categoryRoot.addChild(uncategorized)

const categoriesRootElement = document.getElementById('categories-root')
const uncategorizedElement = new CategoryElement(uncategorized, categoriesRootElement)
uncategorizedElement.element.draggable = false

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

onCategoryAdded = (name = "Unnamed Category", parent = null) => {
    const parentElement = parent ? parent.categoryChildrenContainer : categoriesRootElement
    const parentCategory = parent ? parent.category : categoryRoot
    let category = new Category(name, parentCategory)
    let categoryElement = new CategoryElement(category, parentElement)
    categoryElements.push(categoryElement)
}

onCategoryRemoved = (categoryElement) => {
    categoryElements.splice(categoryElements.indexOf(categoryElement), 1)

    const childrenElements = categoryElement.categoryChildrenContainer.children
    for (const child of childrenElements) categoryElement.wrapper.parentElement.appendChild(child)

    categoryElement.wrapper.parentElement.removeChild(categoryElement.wrapper)


    const category = categoryElement.category
    const parent = category.parent || uncategorized
    expenses.forEach(e => e.category = parent)
    if (category.parent) category.parent.children.splice(category.parent.children.indexOf(category))
}