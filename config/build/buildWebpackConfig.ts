import { Configuration } from "webpack";
import { BuildOptionsType } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig({ paths, mode, port, isDevMode }: BuildOptionsType): Configuration {
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(isDevMode),
        },
        resolve: buildResolvers(),
        devtool: isDevMode ? 'inline-source-map' : undefined,
        devServer: isDevMode ? buildDevServer(port) : undefined,
    }
}