let bigMemory = new ArrayBuffer(1024 * 1024);

const worker = new Worker('worker.js');

document.querySelector('.action').addEventListener('click', () => {
    //Case 1
    worker.postMessage(bigMemory);

    //Case 2: Transfer ownership
    //worker.postMessage(bigMemory, [bigMemory]);
    console.log('Ping');
});

//Enable for case 2
/*
worker.onmessage = (event) => {
    bigMemory = event.data;
};
*/