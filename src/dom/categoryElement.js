class CategoryElement {
    constructor(category, parentElement, collapsed = true) {
        this.category = category

        // Create following DOM structure:
        // Wrapper
        //  |- Category element
        //  |- Children wrapper
        //      |- Children categories container
        //      |- Expenses container

        this.wrapper = createDiv('category-wrapper', parentElement)

        this.element = createDiv('category-element', this.wrapper)
        this.childrenWrapper = createDiv('category-children-wrapper', this.wrapper)

        this.categoryChildrenContainer = createDiv('category-children-wrapper', this.childrenWrapper)
        this.expensesContainer = createDiv('category-expenses-container', this.childrenWrapper)

        this.configureElement()

        this.collapsed = collapsed
        this.childrenWrapper.hidden = collapsed
    }

    configureElement() {
        this.element.innerText = this.category.name
        this.element.style.backgroundColor = this.category.color

        this.collapsed = !this.collapsed

        this.element.onclick = () => {
            this.collapsed = !this.collapsed
            this.childrenWrapper.hidden = this.collapsed
            selectElement(this.element)
        }

        this.element.oncontextmenu = e => {
            e.preventDefault();
            // todo bring up context menu
            return false
        }
    }

    addExpenseElement(expenseElement) {
        this.expensesContainer.append(expenseElement.element)
    }

    expand() {
        this.collapsed = false
        this.childrenWrapper.hidden = false
    }

    collapse() {
        this.collapsed = true
        this.childrenWrapper.hidden = true
    }
}