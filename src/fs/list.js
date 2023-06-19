import { access, constants, readdir } from 'node:fs';

const list = async () => {
    const folderName = 'files';

    access(folderName, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {            
            readdir(folderName, (err, list) => {
                if (err) {
                    throw new Error(err);
                }
                console.log(list);
            });          
        }
    });     
};

await list();