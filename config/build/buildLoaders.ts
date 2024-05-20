import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(isDevMode: boolean): RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module'),
                        localIdentName: isDevMode
                            ?'[name]__[local]--[hash:base64:6]'
                            : '[hash:base64:6]',
                    },
                }
            },
            "sass-loader",
        ],
    };

    return [tsLoader, cssLoader, svgLoader, fileLoader];
}