import path from 'path';
import { fileURLToPath } from 'url';

export const getPath = (metaUrl, relativePath) => {
    return path.join(path.dirname(fileURLToPath(metaUrl)), relativePath);
}