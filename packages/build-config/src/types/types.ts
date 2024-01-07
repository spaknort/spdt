export type Mode = 'production' | 'development'

export interface BuildPaths {
    index: string,
    output: string,
    src: string,
    public: string,
    html: string,
}

export interface BuildOptions {
    mode: Mode,
    port: number,
    paths: BuildPaths
}