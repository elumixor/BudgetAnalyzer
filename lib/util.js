function randomHSL() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 75%, 1)';
}

function createElement(tag = 'div', className = '', parent = null) {
    const element = document.createElement(tag)
    element.className = className

    if (parent) parent.appendChild(element)

    return element
}
