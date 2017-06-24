(() => {
    const resultBox = document.querySelector('.result');
    const inputField = document.querySelector('.field');
    let sharedThread;

    const findNextNumber = () => {
        if (!sharedThread) {
            sharedThread = new SharedWorker('worker.js');
            sharedThread.port.onmessage = (event) => {
                resultBox.innerText = event.data;
            };
            sharedThread.port.start(); //Not requried as we are using onmessage
        }
        sharedThread.port.postMessage(inputField.value);
    };

    

    document.querySelector('.action').addEventListener('click', findNextNumber);
})();