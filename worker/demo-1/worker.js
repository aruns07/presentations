let consumerCount = 0;

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
            result++;
        }
        input--;
    }
    return result;
};

self.onmessage = (e) => {
    consumerCount++;
    console.log('Consumer Count :', consumerCount);
    self.postMessage(countPrimes(e.data));
};