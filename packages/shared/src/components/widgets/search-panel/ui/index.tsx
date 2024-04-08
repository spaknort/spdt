import React from 'react'
import './index.sass'
import { SearchInput } from '../../../../components/features/search-input'
import { Colours, LightThemeColours, useTypedSelector } from '../../../../index'
import { ThemeSwitch } from '../../../features/theme-switch/ui'
import { Notifications } from '../../../entites/notifications/ui'
import { Avatar } from '../../../entites/avatar/ui'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'

export const SearchPanel: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const searchPanelThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color

    return (
        <div style={{ backgroundColor: searchPanelThemeStyle }} className="search-panel">
            <SearchInput />
            <ThemeSwitch />
            <Notifications />
            <Avatar />
        </div>
    )
}