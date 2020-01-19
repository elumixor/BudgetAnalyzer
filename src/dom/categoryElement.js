class CategoryElement {
    constructor(category, parentElement, collapsed = true) {
        this.category = category

        // Create following DOM structure:
        // Wrapper
        //  |- Category element
        //  |- Children wrapper
        //      |- Children categories container
        //      |- Expenses container

        this.wrapper = createElement('div', 'category-wrapper', parentElement)

        this.element = createElement('div', 'category-element', this.wrapper)
        this.element.draggable = true
        this.element.ondragstart = () => {
            draggableCategory = this
            rootDropArea.hidden = false
        }
        this.element.ondragend = () => {
            draggableCategory = null
            rootDropArea.hidden = true
        }
        this.element.ondrop = e => {
            e.preventDefault();
            if (!draggableCategory || this === draggableCategory || this === uncategorizedElement
                || draggableCategory.category.parent === this.category) return

            let p = this.wrapper.parentElement
            while (p.id !== 'categories-root') {
                if (p.firstChild === draggableCategory.element) {
                    console.warn('circular')
                    return
                }
                p =  p.parentElement
            }

            this.category.addChild(draggableCategory.category)
            this.categoryChildrenContainer.appendChild(draggableCategory.wrapper)
            this.expand()
        }

        this.childrenWrapper = createElement('div', 'children-wrapper', this.wrapper)

        this.categoryChildrenContainer = createElement('div', 'category-children-wrapper', this.childrenWrapper)
        this.expensesContainer = createElement('div', 'category-expenses-container', this.childrenWrapper)

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
            categoryContextMenu.show(e.x, e.y, this)
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

const rootDropArea = document.getElementById('root-drop')
rootDropArea.ondrop = e => {
    e.preventDefault()
    if (!draggableCategory || draggableCategory === uncategorizedElement) return

    document.getElementById('categories-root').appendChild(draggableCategory.wrapper)

    return false
}
let draggableCategory = null
let onCategoryAdded = () => {
}
let onCategoryRemoved = () => {
}

categoryContextMenu = new ContextMenu('category',
    new ContextMenuAction('Add subcategory', target => {
        // Should enter name
        promptString(name => {
            onCategoryAdded(name, target)
        })
    }, target => target !== uncategorizedElement),
    new ContextMenuAction('Delete', target => {
        onCategoryRemoved(target)
    }, target => target !== uncategorizedElement)
)