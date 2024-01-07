import path from 'path'
import webpack from 'webpack'
import { Mode, buildWebpack } from '@packages/build-config'
import packageJson from './package.json'

interface VariablesENV {
    port: number,
    mode: Mode,
    ADMIN_REMOTE_URL?: string
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

    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3001'

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'platform',
        filename: 'remoteEntry.js',
        remotes: {
            admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`
        },
        shared: {...packageJson.dependencies}
    }))

    return config
}