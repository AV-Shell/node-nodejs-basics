import { createWriteStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { getPath } from '../common/utils.js'
import { fsErrorTest } from '../common/consts.js';

const write = async () => {
    const filepath = getPath(import.meta.url, './files/fileToWrite.txt');
    try {
        const isInputFile = await stat(filepath).then(x => x.isFile());

        if (!isInputFile) {
            throw new Error(fsErrorTest);
        }

        const writeStream = createWriteStream(filepath);

        process.stdin.pipe(writeStream).on('error', () => { throw new Error(fsErrorTest); })

    } catch (error) {
        throw new Error(fsErrorTest);
    }
};

await write();