import path from 'path';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnvType} from "./config/build/types/config";

export default (env: BuildEnvType) => {
    const defaultPort = 3000;
    const devMode = 'development';

    return buildWebpackConfig({
        mode: env.mode || devMode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
        },
        port: env.port || defaultPort,
        isDevMode: env.mode === devMode,
    });
};