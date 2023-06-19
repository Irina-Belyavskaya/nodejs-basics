const parseEnv = () => {
    process.env.RSS_name1 = 1;
    process.env.RSS_name2 = 2;

    const prefix = 'RSS_';
    const envVariables = Object.keys(process.env).filter((key) => {
        return key.startsWith(prefix);
    });
    envVariables.forEach((key) => {
        const value = process.env[key];
        console.log(`${key}=${value}`);
    });
};

parseEnv();