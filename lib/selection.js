let selectedElements = []

function selectElement(element, appendToSelection = false) {
    element.classList.add('selected')


    if (!appendToSelection) {
        selectedElements.forEach(e => e.classList.remove('selected'))
        selectedElements = [element]
    } else {
        if (selectedElements.includes(element)) {
            selectedElements.splice(selectedElements.indexOf(element), 1)
            element.classList.remove('selected')
        }
        else selectedElements.push(element)
    }
}

function deselectElement(element) {
    element.classList.remove('selected')
    selectedElements.splice(selectedElements.indexOf(element), 1)
}

function clearSelection() {
    selectedElements.forEach(e => e.classList.remove('selected'))
    selectedElements = []
}