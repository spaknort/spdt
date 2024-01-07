import webpack from 'webpack'
import { BuildOptions } from './types/types'

export const resolveWebpack = (options: BuildOptions): webpack.Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js', '.sass', '.css'],
        alias: {
            '@': options.paths.src
        }
    }
}