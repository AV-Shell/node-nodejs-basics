import { writeFile } from 'node:fs/promises';
import { getPath } from '../common/utils.js'
import { createFileText, fsErrorTest } from '../common/consts.js'

const create = async () => {
    const filename = getPath(import.meta.url, './files/fresh.txt');

    try {
        await writeFile(filename, createFileText, { flag: 'wx' });
    } catch (err) {
        throw new Error(fsErrorTest)
    }
};

await create();