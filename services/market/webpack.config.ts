import path from 'path'
import { Mode, buildWebpack } from '@packages/build-config'

interface VariablesENV {
    port: number,
    mode: Mode
}

export default (env: VariablesENV) => {
    return buildWebpack({
        mode: env.mode,
        port: env.port,
        paths: {
            src: path.resolve(__dirname, 'src'),
            output: path.resolve(__dirname, 'dist'),
            index: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'public', 'index.html')
        }
    })   
}