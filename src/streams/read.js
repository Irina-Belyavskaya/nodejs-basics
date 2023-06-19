import path from 'path';
import { createReadStream } from "fs";

const read = async () => {
    const filePath = path.resolve('files', 'fileToRead.txt');
    const readStream = createReadStream(filePath, 'utf8');

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('error', (error) => {
        console.error('Error:', error);
    });
};

await read();