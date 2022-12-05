import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { getPath } from '../common/utils.js';



const workerPromise = (filename, data) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(filename, {
            workerData: data
        });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
};

const performCalculations = async () => {
    const workerFileName = getPath(import.meta.url, './worker.js');
    const workersResult = await Promise
        .allSettled(cpus().map((x, i) => workerPromise(workerFileName, 10 + i)))
        .then(y => y.map((r) => r.status === 'fulfilled' ? { status: 'resolved', data: r.value } : { status: 'error', data: null }));

    console.log(workersResult)

};

await performCalculations();