const prompt = {}


prompt.body = createElement('form', "prompt-body", document.body)

prompt.input = createElement('input', 'prompt-input', prompt.body)

prompt.callback = () => {}

prompt.confirmButton = createElement('input', 'prompt-button', prompt.body)
prompt.confirmButton.type = 'submit'
prompt.confirmButton.innerText = "Confirm"

prompt.body.onsubmit = e => {
    e.preventDefault()
    prompt.callback(prompt.input.value)
    prompt.hide()
    return false;
}

prompt.cancelButton = createElement('div', 'prompt-button', prompt.body)
prompt.cancelButton.innerText = "Cancel"
prompt.cancelButton.onclick = () => prompt.hide()
prompt.cancelButton.onclick = () => prompt.hide()

prompt.show = (callback) => {
    prompt.body.hidden = false;
    prompt.callback = callback
    prompt.input.focus()
}

prompt.hide = () => {
    prompt.body.hidden = true;
}

prompt.hide()


function promptString(callback) {
    prompt.input.type = 'text'
    prompt.show(callback)
}

function promptNumber(callback) {
    prompt.input.type = 'number'
    prompt.show(callback)
}

