import React, { FC } from 'react'
import './index.sass'
import { Colours, LightThemeColours, useTypedSelector } from '@packages/shared'
import { ThemeTypes } from '../../../../../lib/enum/themeTypes'

export const Logo: FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const logoThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    return (
        <div style={{color: logoThemeStyle}} className="logo">
            HORIZON 
            <span className="logo__span">FREE</span>
        </div>
    )
}