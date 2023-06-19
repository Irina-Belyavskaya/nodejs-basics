import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            this.push(reversedChunk);
            callback();
        }
    });

    pipeline(process.stdin, reverseTransform, process.stdout, (error) => {
        if (error) {
            console.error('Error:', error);
        } 
    });
};

await transform();