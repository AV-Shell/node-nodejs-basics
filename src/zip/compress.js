import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { getPath } from '../common/utils.js'
import { fsErrorTest } from '../common/consts.js';

const compress = async () => {
    const inputFileName = getPath(import.meta.url, './files/fileToCompress.txt');
    const outputFileName = getPath(import.meta.url, './files/archive.gz');
    try {
        const isInputFile = await stat(inputFileName).then(x => x.isFile());

        if (!isInputFile) {
            throw new Error(fsErrorTest);
        }



        const gzip = createGzip();
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

}

await compress();