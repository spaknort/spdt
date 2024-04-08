import React from 'react'
import './index.sass'
import { Colours, SearchPanel, Title, TitleSizes } from '@packages/shared'

interface HeaderProps {
    title: string,
    subTitle: string
}

export const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
    return (
        <header className="header">
            <section className="header__info">
                <h4 style={{ color: Colours.text_color }} className="header__sub-title">{ subTitle }</h4>
                <Title size={TitleSizes.big} value={title} />
            </section>
            <SearchPanel />
        </header>
    )
}