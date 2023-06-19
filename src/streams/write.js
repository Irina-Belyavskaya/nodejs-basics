import path from 'path';
import { createWriteStream } from "fs";

const write = async () => {
    const filePath = path.resolve('files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath, { flags: 'a' });
    process.stdin.pipe(writeStream);

    writeStream.on('error', (error) => {
        console.error('Error:', error);
    });
};

await write();