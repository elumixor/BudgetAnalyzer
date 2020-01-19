class ExpenseElement {
    constructor(expense) {
        this.expense = expense

        const [element, date, money, name] = this.createElement()

        this.element = element
        this.date = date
        this.money = money
        this.name = name

        this.configureClick()
    }

    createElement() {
        // todo: insert child in order, based on date of expense
        const element = createElement('div', 'expense', null)

        const dateElement = createElement('div', 'expense-date expense-field', element)
        const moneyElement = createElement('div', 'expense-money expense-field', element)
        const nameElement = createElement('div', 'expense-name expense-field', element)

        dateElement.innerText = this.expense.date.format("DD.MM.YYYY")
        moneyElement.innerText = this.expense.money
        nameElement.innerText = this.expense.name

        return [element, dateElement, moneyElement, nameElement]
    }

    select(add = false) {
        console.log('selecting')
        selectElement(this.element, add)

        if (!add) {
            selectedExpenseElements = [this]
        } else {
            if (selectedExpenseElements.includes(this)) {
                selectedExpenseElements.splice(selectedExpenseElements.indexOf(this), 1)
            } else selectedExpenseElements.push(this)
        }
    }

    configureClick() {
        this.element.onclick = (e) => {
            this.select(e.ctrlKey)

        }

        this.element.oncontextmenu = e => {
            e.preventDefault();
            expenseContext.hidden = false
            expenseContext.style.left = e.pageX + 'px';
            expenseContext.style.top = e.pageY + 'px';
            return false
        }

    }

}

const expenseContext = document.getElementById('expense-context')
const expenseContextCategories = document.getElementById('expense-context-categories')
const contextCategoriesRoot = document.getElementById('context-categories-root')
const inputElement = document.getElementById('context-input')

document.addEventListener('click', e => {
    if (expenseContext.hidden) return
    let targetElement = e.target // clicked element

    do {
        if (targetElement === expenseContext) {
            // This is a click inside. Do nothing, just return.
            return
        }
        // Go up the DOM
        targetElement = targetElement.parentNode
    } while (targetElement)

    // This is a click outside.
    expenseContext.hidden = true
})

let selectedExpenseElements = []

let removeExpenses = () => {
}

let switchExpenses = () => {
}

function displayExpenseCategoryContext() {
    expenseContextCategories.style.left = expenseContext.style.left
    expenseContextCategories.style.top = expenseContext.style.top

    expenseContext.hidden = true
    expenseContextCategories.hidden = false
}

function onRemove() {
    removeExpenses(selectedExpenseElements)
}

expenseContextCategories.onsubmit = e => {
    e.preventDefault()
    const name = inputElement.value
    expenseContextCategories.hidden = true
    switchExpenses(selectedExpenseElements, name)
    return false
}

document.addEventListener('click', e => {
    if (expenseContext.hidden) return
    let targetElement = e.target // clicked element

    do {
        if (targetElement === expenseContext) {
            // This is a click inside. Do nothing, just return.
            return
        }
        // Go up the DOM
        targetElement = targetElement.parentNode
    } while (targetElement)

    // This is a click outside.
    expenseContext.hidden = true
})
document.addEventListener('click', e => {
    if (expenseContextCategories.hidden) return
    let targetElement = e.target // clicked element

    do {
        if (targetElement === expenseContextCategories || targetElement === expenseContext) {
            // This is a click inside. Do nothing, just return.
            return
        }
        // Go up the DOM
        targetElement = targetElement.parentNode
    } while (targetElement)

    // This is a click outside.
    expenseContextCategories.hidden = true
})