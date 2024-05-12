import path from 'path';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
export default (function (env) {
    return buildWebpackConfig({
        mode: "development",
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
        },
        isDev: true,
        port: 3000,
    });
});
