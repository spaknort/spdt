import { ThemeActionTypes } from '../../lib/enum/themeActionTypes'
import { ThemeTypes } from '../../lib/enum/themeTypes'
import { ThemeAction } from '../../lib/interfaces/actions/themeAction'

interface IThemeStateDefault {
    theme: ThemeTypes
}

const themeStateDefault: IThemeStateDefault = {
    theme: localStorage.getItem('theme') as ThemeTypes || ThemeTypes.DARK
}

export const themeReducer = (state = themeStateDefault, action: ThemeAction) => {
    switch (action.type) {
        case ThemeActionTypes.CHANGE_THEME:
            localStorage.setItem('theme', action.theme)
            return { ...state, theme: action.theme }
        default: return { ...state }
    }
}