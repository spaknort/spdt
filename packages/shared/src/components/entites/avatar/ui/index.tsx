import React from 'react'
import './index.sass'
import { Colours, LightThemeColours, useTypedSelector } from '../../../..'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'

export const Avatar: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const avatarThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color

    return (
        <div style={{ backgroundColor: avatarThemeStyle }} className="avatar">
            <img src="https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6" alt="Avatar" className="avatar__img" />
        </div>
    )
}