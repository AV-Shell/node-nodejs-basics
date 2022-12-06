import path from 'path';
import { fileURLToPath } from 'url';

export const getPath = (metaUrl, relativePath) => {
    return path.join(path.dirname(fileURLToPath(metaUrl)), relativePath);
}

export const getFilePath = (metaUrl) => fileURLToPath(metaUrl);

export const getDirPath = (metaUrl) => path.dirname(fileURLToPath(metaUrl));