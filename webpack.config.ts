import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEndType } from "./config/build/types/config";

const devMode = "development";
const defaultPort = 3000;

export default (env: BuildEndType): Configuration => {
    return buildWebpackConfig({
      mode: env.mode || devMode,
      paths: {
          entry: path.resolve(__dirname, 'src', 'index.ts'),
          build: path.resolve(__dirname, 'build'),
          html: path.resolve(__dirname, 'public', 'index.html'),
      },
        port: env.port || defaultPort,
        isDevMode: env.mode === devMode,
  });
};