class Dataset {
    constructor(name, color, data) {
        this.name = name
        this.color = color
        this.data = data
    }
}

function constructDatasets(rootCategory, expenses) {
    return rootCategory.children.map(category => {
        let sum = 0

        const data = expenses.filter(e => e.category === category).map(expense => ({
            t: expense.date,
            y: (sum += expense.money)
        }))

        return new Dataset(category.name, category.color, data)
    })
}