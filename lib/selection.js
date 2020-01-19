let selectedElements = []

function selectElement(element, appendToSelection = false) {
    console.log(element)
    element.classList.add('selected')
    console.log(element)


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