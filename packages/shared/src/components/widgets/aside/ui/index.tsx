import React, { FC } from 'react'
import './index.sass'
import { Logo } from './logo'
import { Navigation } from './navigation'
import { Colours, LightThemeColours, useTypedSelector } from '@packages/shared'
import { INavigationItem } from '@/shared/lib/interfaces/INavigationItem'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'
 
interface AsideProps {
    items?: Array<INavigationItem>
}

export const Aside: FC<AsideProps> = ({ items }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const asideThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color

    return (
        <aside style={{ backgroundColor: asideThemeStyle }} className="aside">
            <Logo />
            <Navigation items={items} />
        </aside>
    )
}