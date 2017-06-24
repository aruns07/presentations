self.onmessage = (event) => {
    //Case 1
    self.postMessage(event.data);

    //Case 2
    //self.postMessage(event.data, [event.data]);
    console.log('Pong');
};