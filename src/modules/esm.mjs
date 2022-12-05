import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { getFilePath, getDirPath } from '../common/utils.js'
import { createRequire } from 'node:module';
import './files/c.js';

const random = Math.random();
const filepath = random > 0.5 ? './files/a.json' : './files/b.json'

const newRequire = createRequire(import.meta.url);
// let { default: unknownObject } = await import(filepath, { assert: { type: 'json' } }); // ExperimentalWarning 
let unknownObject = newRequire(filepath);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);


console.log(`Path to current file is ${getFilePath(import.meta.url)}`);
console.log(`Path to current directory is ${getDirPath(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { myServer, unknownObject }