import { fork } from 'child_process';
import { getPath } from '../common/utils.js';
const scriptFilePath = getPath(import.meta.url, './files/script.js');


const spawnChildProcess = async (args) => {
    const child = fork(scriptFilePath, args, { silent: true });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', '...', 42, 77, 84]);
