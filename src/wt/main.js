import { Worker } from 'node:worker_threads';
import { cpus } from "os";

const performCalculations = async () => {
  const numCores = cpus().length;

  const workers = [];
  const results = [];

  for (let i = 0; i < numCores; i++) {
  const worker = new Worker('./worker.js');

  worker.on('message', (result) => {
    results.push(result);

    if (results.length === numCores) {
      console.log(results);
    }
  });

  worker.on('error', (error) => {
    results.push({ status: 'error', data: null });

    if (results.length === numCores) {
      console.log(results);
    }
  });

  worker.postMessage(i + 10);
  workers.push(worker);
  }
};

performCalculations();