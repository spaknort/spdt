import { ThemeTypes } from "../../enum/themeTypes"
import { ThemeActionTypes } from '../../enum/themeActionTypes'

export interface ThemeAction {
    type: ThemeActionTypes,
    theme: ThemeTypes
}