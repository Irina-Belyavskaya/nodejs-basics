import { access, constants, readdir, mkdirSync, createReadStream, createWriteStream} from 'node:fs';
import path from 'path';

const copy = async () => {
    
    const dir = 'files';
    const folderName = 'files_copy';

    access(dir, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            access(folderName, constants.F_OK, (err) => {
                if (err) {
                    mkdirSync(folderName);
                    readdir(dir, (err, list) => {
                        if (err) {
                          callback(err);
                          return;
                        }
                        list.forEach((item) => {
                            const curSrc = path.resolve(dir, item);
                            const curDest = path.resolve(folderName, item);
                            createReadStream(curSrc).pipe(createWriteStream(curDest));
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
