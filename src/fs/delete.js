import { unlink, stat } from 'node:fs/promises';
import { getPath } from '../common/utils.js';
import { fsErrorTest } from '../common/consts.js';

const remove = async () => {
    try {

        const deleteFilePath = getPath(import.meta.url, './files/fileToRemove.txt');
        const isInputFile = await stat(deleteFilePath).then(x => x.isFile());

        if (!isInputFile) {
            throw new Error(fsErrorTest);
        }
        
        await unlink(deleteFilePath);

    } catch (error) {
        throw new Error(fsErrorTest);
    }


};

await remove();