(function() {
    const CSS_CLASS_MOVE = 'move';
    const CSS_SELECTOR_BLOCK_CONTAINER = '.block-container';
    const CSS_SELECTOR_BLOCK = '.inc-block';
    const inputField = document.querySelector('.calc-input');
    const resultText = document.querySelector('.result');

    let primeWorker;

    //Increment number in an element
    const incrementCount = (element) => {
        element.innerText = parseInt(element.innerText, 10) + 1;
    };

    //Handler on click on a block
    const animateBlock = (event) => {
        const element = event.target;
        element.classList.toggle(CSS_CLASS_MOVE);
        //incrementCount(element);
        window.setInterval(() => { incrementCount(element); }, 1000);
        element.removeEventListener('click', animateBlock);
    };

    //Is number passed a prime or not
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

    //From zero to passed number how many are prime
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

    //Run counting prime code on main thread
    const calculateOnMainThread = () => {
        resultText.innerText = '';
        let result = countPrimes(inputField.value);
        resultText.innerText = result;
    };

    //Run counting prime code on a background thread
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

    //Bind event handler to animatable blocks
    const blocks = document.querySelectorAll(CSS_SELECTOR_BLOCK);
    [...blocks].forEach((block) => {
        block.addEventListener('click', animateBlock);
    });


    document.querySelector('.action-main-thread')
        .addEventListener('click', calculateOnMainThread);

    document.querySelector('.action-new-thread')
        .addEventListener('click', calculateOnNewThread);


})()