import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import { BuildPathsType } from "./types/config";

const showBuildingProgress = (percentage: number, message: string, ...args: any[]) => {
    console.info(`${(percentage * 100).toFixed()}% ${message} ${args}`);
};

export function buildPlugins(paths: BuildPathsType): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(showBuildingProgress),
    ]
}