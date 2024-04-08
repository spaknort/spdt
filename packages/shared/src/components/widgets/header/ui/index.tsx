import React from 'react'
import './index.sass'
import { Colours, LightThemeColours, SearchPanel, Title, TitleSizes, useTypedSelector } from '@packages/shared'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'

interface HeaderProps {
    title: string,
    subTitle: string
}

export const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const headerThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const subTitleThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    return (
        <header style={{ background: headerThemeStyle }} className="header">
            <section className="header__info">
                <h4 style={{ color: subTitleThemeStyle }} className="header__sub-title">{ subTitle }</h4>
                <Title size={TitleSizes.big} value={title} />
            </section>
            <SearchPanel />
        </header>
    )
}