import { access, constants, rm} from 'node:fs';
import path from 'path';

const remove = async () => {
    const fileName = path.resolve('files', 'fileToRemove.txt');

    access(fileName, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            rm(fileName, (err) => { 
                if (err) {
                    throw new Error(err);
                }
            });
        }
    });    
};

await remove();