import webpack from 'webpack'
import { BuildOptions } from './types/types'
import { pluginsWebpack } from './pluginsWebpack'
import { resolveWebpack } from './resolveWebpack'
import { rulesWebpack } from './rulesWebpack'
import { devServerWebpack } from './devServerWebpack'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const isDev = (options.mode == 'development') ? true: false

    return {
        mode: options.mode || 'development',
        entry: {
            index: options.paths.index
        },
        output: {
            path: options.paths.output,
            filename: '[name].js',
            clean: true
        },
        resolve: resolveWebpack(options),
        plugins: pluginsWebpack(options),
        module: {
            rules: rulesWebpack(options)
        },
        devServer: (isDev) ? devServerWebpack(options) : undefined
    }
}