import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin } from "webpack";
export function buildPlugins(paths) {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
    ];
}
