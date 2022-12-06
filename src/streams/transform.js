
import { Transform, pipeline } from 'stream';

class MyTransform extends Transform {
    _transform(chunk, encoding, callback) {
        try {
            const resultString = chunk.toString('utf-8').split('').reverse().join('') + '\n';
            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }
}

const transform = async () => {
    const myTransformStream = new MyTransform();
    pipeline(process.stdin, myTransformStream, process.stdout, (err) => {
        if (err) {
            throw new Error(fsErrorTest);
        }
    });

};

await transform();