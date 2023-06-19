import {createGzip} from "zlib";
import path from 'path';
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
    const filePath = path.resolve('files', 'fileToCompress.txt');
    const gzipName = path.resolve('files', 'archive.gz');

    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(gzipName);
    const gzipStream = createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    writeStream.on('error', (error) => {
        console.error('Error:', error);
    });
};

await compress();