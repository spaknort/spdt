import { IParsedFile } from "@packages/shared"

export const parseFiles = (files: FileList): Promise<Array<IParsedFile>> => {
    const promise = new Promise<Array<IParsedFile>>((resolve, reject) => {
        const parsedFiles: Array<IParsedFile> = []

        for (const [key, file] of Object.entries(files)) {
            const reader = new FileReader()
            
            reader.readAsArrayBuffer(file)
            reader.addEventListener('load', () => {
                parsedFiles.push({ name: file.name, buffer: Array.from(new Uint8Array(reader.result as ArrayBuffer)) })
                if (Number(key) === files.length - 1) resolve(parsedFiles)
            })
        }
    })

    return promise
}