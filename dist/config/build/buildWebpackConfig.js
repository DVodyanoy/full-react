import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";
export function buildWebpackConfig(_a) {
    var paths = _a.paths, mode = _a.mode, port = _a.port;
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
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: 'inline-source-map',
        devServer: buildDevServer(port),
    };
}
