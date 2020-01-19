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

    configureClick() {
        this.element.onclick = (e) => {
            // todo: multiple selection
            selectElement(this.element)
        }

        this.element.oncontextmenu = e => {
            e.preventDefault();
            // expenseContextMenu.show(e.x, e.y)
            return false
        }

    }

}

// expenseContextMenu = new ContextMenu()