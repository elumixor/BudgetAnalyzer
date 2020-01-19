let handleCSV = (file) => {
    console.log(file)
};
let handleConfig = (file) => {
    console.log(file)
};

const dropArea = document.body;

dropArea.addEventListener('drop', e => {
    let dt = e.dataTransfer;
    let file = dt.files[0];
    if (!file) return

    if (file.name.endsWith("csv")) handleCSV(file);
    else if (file.name.endsWith("bacfg")) handleConfig(file);
}, false);

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation()
    }, false)
});

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.add('highlight')
    }, false)
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.remove('highlight')
    }, false)
});

