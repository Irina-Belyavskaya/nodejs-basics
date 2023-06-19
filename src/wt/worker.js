import { parentPort } from 'node:worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = (data, isError = false) => {
  parentPort.postMessage({ status: isError ? 'error' : 'resolved', data });
};

parentPort.on('message', (data) => {
  const result = nthFibonacci(data);
  sendResult(result);
});