import { ThemeTypes } from "../../enum/themeTypes"
import { ThemeActionTypes } from '../../../index'

export interface ThemeAction {
    type: ThemeActionTypes,
    theme: ThemeTypes
}