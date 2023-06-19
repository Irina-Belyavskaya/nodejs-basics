import { spawn } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
    const filePath = path.resolve('files', 'script.js');
    const child = spawn('node', [filePath, ...args], { stdio: 'pipe' });
    
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('error', (error) => {
        console.error('Child error:', error);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
