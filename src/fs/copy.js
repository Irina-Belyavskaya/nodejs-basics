import { access, constants, readdir, mkdirSync, createReadStream, createWriteStream} from 'node:fs';
import path from 'path';

const copy = async () => {
    
    const folderName = 'files';
    const newFolderName = 'files_copy';

    access(folderName, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            access(newFolderName, constants.F_OK, (err) => {
                if (err) {
                    mkdirSync(newFolderName);
                    readdir(folderName, (err, list) => {
                        if (err) {
                            throw new Error(err);
                        }
                        list.forEach((item) => {
                            const src = path.resolve(folderName, item);
                            const dest = path.resolve(newFolderName, item);
                            createReadStream(src).pipe(createWriteStream(dest));
                        });
                    });
                } else {
                    throw new Error('FS operation failed');
                }
            });
        }
    });    
};

await copy();
