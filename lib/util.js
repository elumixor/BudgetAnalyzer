function randomHSL() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 75%, 1)';
}

function createDiv(className = '', parent = null) {
    const element = document.createElement('div')
    element.className = className

    if (parent) parent.appendChild(element)

    return element
}