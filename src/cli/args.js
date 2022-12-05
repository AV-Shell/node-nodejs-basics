const parseArgs = () => {
    const args = process.argv.slice(2);
    const resultsPairs = [];

    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith('--')) {
            resultsPairs.push(`\x1b[32m${args[i].slice(2)}\x1b[0m is \x1b[33m${args[i + 1]}\x1b[0m`);
            i++;
        }
    }
    if (resultsPairs.length) {
        console.log(`\x1b[36m Command cli arg${resultsPairs.length > 1 ? 's are' : ' is'}: \x1b[0m \n`);
        console.log(resultsPairs.join(', '));
    }


};

parseArgs();