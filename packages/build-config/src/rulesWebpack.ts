import { ModuleOptions } from 'webpack'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types'

export const rulesWebpack = (options: BuildOptions): ModuleOptions['rules'] => {
    const isDev = (options.mode == 'development') ? true: false 

    return [
        {
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    transpileOnly: isDev,
                }
            }],
            exclude: /node_modules/
        },
        {
            test: /\.sass/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']        
        },
        {
            test: /\.css/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }],
        }
    ]
}