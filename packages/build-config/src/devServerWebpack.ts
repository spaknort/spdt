import webpack from 'webpack'
import { BuildOptions } from './types/types'

export const devServerWebpack = (options: BuildOptions): webpack.Configuration['devServer'] => {
    return {
        port: options.port,
        liveReload: true,
        historyApiFallback: true,
        hot: true
    }
}