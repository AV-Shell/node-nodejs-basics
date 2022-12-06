import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { getPath } from '../common/utils.js'
import { fsErrorTest } from '../common/consts.js';

const calculateHash = async () => {
    const filename = getPath(import.meta.url, './files/fileToCalculateHashFor.txt');
    try {
        const isInputFile = await stat(filename).then(x => x.isFile());

        if (!isInputFile) {
            throw new Error(fsErrorTest);
        }

        const hash = createHash('sha256');
        createReadStream(filename).pipe(hash).on('finish', () => {
            console.log(`Hash of file  \x1b[36m ${filename} \x1b[0m  is \n \x1b[33m${hash.digest('hex')}\x1b[0m`);
        }).on('error', () => { throw new Error(fsErrorTest); })

    } catch (error) {
        throw new Error(fsErrorTest);
    }
};

await calculateHash();