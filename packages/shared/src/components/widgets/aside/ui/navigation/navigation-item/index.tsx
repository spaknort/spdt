import React, { FC } from 'react'
import './index.sass'
import { Colours, LightThemeColours, useTypedSelector } from '@packages/shared'
import { Link } from 'react-router-dom'
import { ThemeTypes } from '../../../../../../lib/enum/themeTypes'

interface NavigationItem {
    svg: any,
    title: string,
    path: string
}

export const NavigationItem: FC<NavigationItem> = ({ svg, title, path }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const navigationItemThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    return (
        <Link style={{ color: navigationItemThemeStyle }} className='aside__nav-item' to={path} >
            { svg }
            <span>{ title }</span>
        </Link>
    )
}