import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BuildOptions } from './types/types'

export const pluginsWebpack = (options: BuildOptions): webpack.Configuration['plugins'] => {
    return [
        new HtmlWebpackPlugin({
            filename: options.paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
        }),
        new ForkTsCheckerWebpackPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
}