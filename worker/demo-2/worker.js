let consumerCount = 0;
self.onconnect = (connectEvent) => {

    let port = connectEvent.ports[0];

    port.onmessage = (messageEvent) => {
        consumerCount++;
        /**
         * ****** Number of times event triggered
         */
        console.log('Consumer Count :', consumerCount);
        port.postMessage(parseInt(messageEvent.data,10) + 1);
    };
};