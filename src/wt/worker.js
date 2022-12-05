import { workerData, parentPort } from 'worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // uncomment below if you want to check with fallen threads

/* 
    if (Math.random() > 0.5) {
        throw new Error();
    } else {
        parentPort.postMessage(nthFibonacci(workerData))
    }
    return;
 */

    parentPort.postMessage(nthFibonacci(workerData))

};

sendResult();