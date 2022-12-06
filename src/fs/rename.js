import { rename as fsRename, access, constants, stat } from 'node:fs/promises';
import { getPath } from '../common/utils.js';
import { fsErrorTest } from '../common/consts.js';


const rename = async () => {
    try {
        let isOutputFileExists = false;
        const wrongFilePath = getPath(import.meta.url, './files/wrongFilename.txt');
        const rightFilePath = getPath(import.meta.url, './files/properFilename.md');
        const isInputFile = await stat(wrongFilePath).then(x => x.isFile());

        try {
            await access(rightFilePath, constants.F_OK);
            isOutputFileExists = true;
        } catch (error) {

        }

        if (isOutputFileExists || !isInputFile) {
            throw new Error(fsErrorTest);
        }

        await fsRename(wrongFilePath, rightFilePath);

    } catch (error) {
        throw new Error(fsErrorTest);
    }
};

await rename();