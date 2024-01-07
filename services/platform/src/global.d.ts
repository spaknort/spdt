declare module '*.png'
declare module '*.jpg'
declare module '*.svg'
declare module '*.sass'
declare module '*.sass' {
    const content: Record<string, string>;
    export default content;
}