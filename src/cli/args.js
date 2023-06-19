const parseArgs = () => {
    var args = process.argv.slice(2);
    const prefix = '--';
    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith(prefix))
            console.log(`${args[i].substring(2)} is ${args[i + 1]}`);
    }
};

parseArgs();