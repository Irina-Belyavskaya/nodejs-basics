import { createHash } from "crypto";
import { readFileSync } from "fs";
import path from 'path';

const calculateHash = async () => {
    const filePath = path.resolve('files', 'fileToCalculateHashFor.txt');
    const buff = readFileSync(filePath);
    const hash = createHash("sha256").update(buff).digest("hex");
    console.log(hash);
};

await calculateHash();