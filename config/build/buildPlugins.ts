import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance, ProgressPlugin } from "webpack";
import { BuildPathsType } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(paths: BuildPathsType, isDevMode: boolean): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDevMode),
        })
    ]
}