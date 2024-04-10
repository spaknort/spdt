import React from 'react'
import { GeneralSvgSelector } from '../../../generalSvgSelector'
import { generalSvgNames } from '../../../../lib/enum/generalSvgNames'
import { Colours, useTypedSelector } from '../../../..'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'
import './index.sass'
import { useDispatch } from 'react-redux'
import { ThemeActionTypes } from '../../../../lib/enum/actions/themeActionTypes'

export const ThemeSwitch: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const dispatch = useDispatch()

    return (
        <div className="theme-switch">
            {
                (theme == ThemeTypes.DARK) ?
                    <GeneralSvgSelector 
                        styles={{ cursor: 'pointer' }} 
                        params={{ width: 18, height: 18 }} 
                        onClick={() => dispatch({ type: ThemeActionTypes.CHANGE_THEME, theme: ThemeTypes.LIGHT })}
                        svgName={ generalSvgNames.darkTheme }
                    />:
                    <GeneralSvgSelector 
                        styles={{ cursor: 'pointer' }} 
                        params={{ width: 26, height: 26 }} 
                        onClick={() => dispatch({ type: ThemeActionTypes.CHANGE_THEME, theme: ThemeTypes.DARK })}
                        svgName={ generalSvgNames.lightTheme }

                    />
            }
        </div>
    )
}