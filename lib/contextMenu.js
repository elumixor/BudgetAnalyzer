class ContextMenu {
    constructor(name, ...actions) {
        this.body = createElement('div', `context-menu context-${name}`, document.body)
        this.body.hidden = true
        this.target = null

        this.buttons = actions.map(action => {
            const button = createElement('div', 'context-menu-button button', this.body)
            button.innerText = action.name
            button.onclick = () => {
                action.callback(this.target)
                if (action.closeOnClick) this.hide()
            }
            return [button, action.displayCondition]
        })
    }

    show(x, y, target) {
        this.target = target
        this.buttons.forEach(([button, action]) => button.hidden = !action(target))

        const style = this.body.style
        style.left = x + 'px';
        style.top = y + 'px';


        shownContextMenu = this
        this.body.hidden = false
    }

    hide() {
        this.body.hidden = true
        shownContextMenu = null
    }
}

class ContextMenuAction {
    constructor(name, callback, displayCondition = () => true, closeOnClick = true) {
        this.name = name
        this.callback = callback
        this.displayCondition = displayCondition
        this.closeOnClick = closeOnClick
    }
}

let shownContextMenu = null

document.addEventListener('click', e => {
    if (!shownContextMenu) return
    let targetElement = e.target // clicked element

    do {
        if (targetElement === shownContextMenu.body) {
            // This is a click inside. Do nothing, just return.
            return
        }
        // Go up the DOM
        targetElement = targetElement.parentNode
    } while (targetElement)

    // This is a click outside.
    shownContextMenu.hide()
})
