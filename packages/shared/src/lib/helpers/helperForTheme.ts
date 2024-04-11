import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"

export function helperForTheme (theme: ThemeTypes, backgroundThemeStyle: string) {
    const rootElem = document.getElementById('root') as HTMLDivElement

    rootElem.style.cssText =  `background-color: ${backgroundThemeStyle}`
    document.body.classList.value = (`body_${theme.toLowerCase()}`)
}