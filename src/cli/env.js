const parseEnv = () => {
    const prefix='RSS_';

    const props = Object.entries(process.env).filter(x => x[0].startsWith(prefix));

    console.log('\x1b[36m env variables start with \x1b[0m', `"${prefix}":\n`);
    const result = props.map(prop => `\x1b[32m${prop[0]}\x1b[0m=\x1b[33m${prop[1]}\x1b[0m`).join('; ');
    console.log(result);

};

parseEnv();