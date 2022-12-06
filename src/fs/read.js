import { readFile, stat } from 'node:fs/promises';
import { getPath } from '../common/utils.js';
import { fsErrorTest } from '../common/consts.js';

const read = async () => {
    try {
        const sourceFilePath = getPath(import.meta.url, './files/fileToRead.txt');
        const isInputFile = await stat(sourceFilePath).then(x => x.isFile());

        if (!isInputFile) {
            throw new Error(fsErrorTest);
        }
        
        const fileContent = await readFile(sourceFilePath);

        console.log('\x1b[36m%s\x1b[0m', 'File content:\n');
        console.log('\x1b[33m%s\x1b[0m', fileContent);
        console.log('\x1b[0m')
    } catch (error) {
        throw new Error(fsErrorTest);
    }
};

await read();