import { access, constants, readFile } from 'node:fs';
import path from 'path';

const read = async () => {
    const filePath = path.resolve('files', 'fileToRead.txt');

    access(filePath, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            readFile(filePath, 'utf8', function(err, data) {
                if (err) 
                    throw new Error(err);
                console.log(data);
            });
        }
    });   
};

await read();