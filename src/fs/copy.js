import { mkdir, access, constants, cp } from 'node:fs/promises';
import { getPath } from '../common/utils.js'
import { fsErrorTest } from '../common/consts.js'

const copy = async () => {
    try {
        const inDirPath = getPath(import.meta.url, './files')
        const outDirPath = getPath(import.meta.url, './files_copy')

        await access(inDirPath, constants.R_OK);
        await mkdir(outDirPath, { recursive: false });
        await cp(inDirPath, outDirPath, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });


    } catch (error) {
        throw new Error(fsErrorTest);
    }
};

await copy();
