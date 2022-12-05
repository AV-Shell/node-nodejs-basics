import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { getPath } from '../common/utils.js'
import { fsErrorTest } from '../common/consts.js';

const decompress = async () => {
    const inputFileName = getPath(import.meta.url, './files/archive.gz');
    const outputFileName = getPath(import.meta.url, './files/fileToCompress.txt');
    try {
        const isInputFile = await stat(inputFileName).then(x => x.isFile());

        if (!isInputFile) {
            throw new Error(fsErrorTest);
        }

        const gzip = createGunzip();
        const source = createReadStream(inputFileName);
        const destination = createWriteStream(outputFileName);

        pipeline(source, gzip, destination, (err) => {
            if (err) {
                throw new Error(fsErrorTest);
            }
        });

    } catch (error) {
        throw new Error(fsErrorTest);
    }
};

await decompress();