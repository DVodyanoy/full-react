import {ResolveOptions} from "webpack";
import {BuildPathsType} from "./types/config";

export function buildResolvers(paths: BuildPathsType): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        preferAbsolute: true,
        alias: {}
    }
}