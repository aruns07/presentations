(function(){
    const CSS_CLASS_MOVE = 'move';
    const CSS_SELECTOR_BLOCK_CONTAINER = '.block-container';
    const CSS_SELECTOR_BLOCK = '.inc-block';
    const inputField = document.querySelector('.calc-input');
    const resultText = document.querySelector('.result');

    let primeWorker;

    const incrementCount = (element) => {
        element.innerText = parseInt(element.innerText, 10) + 1;
    };

    const animateBlock = (event) => {
        const element = event.target;
        element.classList.toggle(CSS_CLASS_MOVE);
        //incrementCount(element);
        window.setInterval(()=> { incrementCount(element); }, 1000);
        element.removeEventListener('click', animateBlock);
    };

    const isPrime = (number = 1) => {
        let result = true;
        let divisor = number - 1;
        while (divisor > 1) {
            if (number % divisor === 0) {
                result = false;
                //break;
            }
            divisor--;
        }
        return result;
    };

    const countPrimes = (input = 0) => {
        let result = 0;
        while (input > 0) {
            if (isPrime(input)) {
                console.log(input);
                result++;
            }
            input--;
        }
        return result;
    };

    const calculateOnMainThread = () => {
        resultText.innerText = '';
        let result = countPrimes(inputField.value);
        resultText.innerText = result;
    };

    const calculateOnNewThread = () => {
        resultText.innerText = '';
        if (!primeWorker)  {
            primeWorker = new Worker('worker.js');
            primeWorker.onmessage = (e) => {
                resultText.innerText = e.data;
            };
        }
        primeWorker.postMessage(inputField.value);
    };


    const blocks = document.querySelectorAll(CSS_SELECTOR_BLOCK);
    [...blocks].forEach((block) => {
        block.addEventListener('click', animateBlock);
    });


    document.querySelector('.action-main-thread')
        .addEventListener('click', calculateOnMainThread);

    document.querySelector('.action-new-thread')
        .addEventListener('click', calculateOnNewThread);


})()