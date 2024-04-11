import React, { CSSProperties } from 'react'
import './index.sass'
import { LightThemeColours, TitleSizes, useTypedSelector } from '@packages/shared'
import { Colours } from '@packages/shared'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'

interface TitleProps {
    size: TitleSizes,
    value: string,
    style?: CSSProperties,
    className?: string,
    onClick?: () => void
}

export const Title: React.FC<TitleProps> = ({ size, value, style, className, onClick }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const titleThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    return (
        (size == TitleSizes.large) ? <h1 onClick={onClick} style={{ color: titleThemeStyle, ...style }} className={"header__title-large " + className}>{ value }</h1>:
        (size == TitleSizes.big) ? <h1 onClick={onClick} style={{ color: titleThemeStyle, ...style }} className={"header__title-big " + className}>{ value }</h1>:
        (size == TitleSizes.medium) ? <h3 onClick={onClick} style={{ color: titleThemeStyle, ...style }} className={"header__title-medium " + className}>{ value }</h3>:
        (size == TitleSizes.small) ? <h5 onClick={onClick} style={{ color: titleThemeStyle, ...style }} className={"header__title-small " + className}>{ value }</h5>: ''
    )
}