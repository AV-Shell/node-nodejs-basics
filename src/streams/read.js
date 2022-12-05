import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { getPath } from '../common/utils.js'
import { fsErrorTest } from '../common/consts.js';

const read = async () => {
    const filename = getPath(import.meta.url, './files/fileToRead.txt');
    try {
        const isInputFile = await stat(filename).then(x => x.isFile());

        if (!isInputFile) {
            throw new Error(fsErrorTest);
        }

        createReadStream(filename).pipe(process.stdout).on('error', () => { throw new Error(fsErrorTest); })

    } catch (error) {
        throw new Error(fsErrorTest);
    }
};

await read();