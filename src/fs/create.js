import { access, constants, writeFile } from 'node:fs';
import path from 'path';

const create = async () => {
    const filePath = path.resolve('files', 'fresh.txt');

    access(filePath, constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        } else {
            const content = 'I am fresh and young';
            writeFile(filePath, content, (err) => {
                if (err) {
                    throw new Error(err);
                }
            });
        }
    });    
};

await create();