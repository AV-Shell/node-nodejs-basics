import { readdir } from 'node:fs/promises';
import { getPath } from '../common/utils.js';
import { fsErrorTest } from '../common/consts.js';

const list = async () => {
    try {
        const sourceFolderPath = getPath(import.meta.url, './files');
        const dirents = await readdir(sourceFolderPath, { withFileTypes: true });
        const fileNames = dirents.filter(x => x.isFile()).map(x => x.name);

        console.log('\x1b[36m%s\x1b[0m', 'Files:\n');
        for (const fileName of fileNames) {
            console.log('\x1b[33m%s\x1b[0m', fileName);
        }
        console.log('\x1b[0m')
    } catch (error) {
        throw new Error(fsErrorTest);
    }
};

await list();