import { createGunzip } from "zlib";
import path from 'path';
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
    const filePath = path.resolve('files', 'fileToCompress.txt');
    const gzipName = path.resolve('files', 'archive.gz');

    const readStream = createReadStream(gzipName);
    const writeStream = createWriteStream(filePath);
    const gunzipStream = createGunzip();

    readStream.pipe(gunzipStream).pipe(writeStream);

    writeStream.on('error', (error) => {
        console.error('Error:', error);
    });
};

await decompress();