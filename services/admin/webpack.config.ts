import path from 'path'
import webpack from 'webpack'
import { Mode, buildWebpack } from '@packages/build-config'
import packageJson from './package.json'

interface VariablesENV {
    port: number,
    mode: Mode
}

export default (env: VariablesENV) => {
    const config = buildWebpack ({
        mode: env.mode,
        port: env.port,
        paths: {
            src: path.resolve(__dirname, 'src'),
            output: path.resolve(__dirname, 'dist'),
            index: path.resolve(__dirname, 'src', 'index.tsx'),
            public: path.resolve(__dirname, 'public'),
            html: path.resolve(__dirname, 'public', 'index.html')
        }
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'admin',
        filename: 'remoteEntry.js',
        exposes: {
            './App': './src/bootstrap.tsx'
        },
        shared: {...packageJson.dependencies}
    }))

    return config
}