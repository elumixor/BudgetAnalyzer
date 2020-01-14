class Category {
    constructor(name = "Unnamed category", color = randomHSL(), parent = null, children = []) {
        this.name = name
        this.color = color
        this.parent = parent
        this.children = children
    }

    addChild(child) {
        if (this.children.includes(child)) return

        if (child.parent) child.parent.children.splice(child.parent.children.indexOf(child), 1)

        this.children.push(child)
        child.parent = this
    }
}