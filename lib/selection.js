let selectedElements = []

function selectElement(element, appendToSelection = false) {
    element.classList.add('selected')

    if (!appendToSelection) {
        selectedElements.forEach(e => e.classList.remove('selected'))
        selectedElements = [element]
    } else {
        selectedElements.push(element)
    }
}

function deselectElement(element) {
    element.classList.remove('selected')
    selectedElements.splice(selectedElements.indexOf(element), 1)
}