import { access, constants, rename} from 'node:fs';
import path from 'path';

const renameFile = async () => {
    const oldFileName = path.resolve('files', 'wrongFilename.txt');
    const newFileName = path.resolve('files', 'properFilename.md');

    access(oldFileName, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            access(newFileName, constants.F_OK, (err) => {
                if (!err) {
                    throw new Error('FS operation failed');
                } else {
                    rename(oldFileName, newFileName, (err) => {
                        if (err)
                            throw new Error(err);
                    });
                }
            }); 
        }
    });    
};

await renameFile();