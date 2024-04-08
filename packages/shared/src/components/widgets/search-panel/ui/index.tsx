import React from 'react'
import './index.sass'
import { SearchInput } from '../../../../components/features/search-input'
import { Colours } from '../../../../index'
import { ThemeSwitch } from '../../../features/theme-switch/ui'
import { Notifications } from '../../../entites/notifications/ui'
import { Avatar } from '../../../entites/avatar/ui'

export const SearchPanel: React.FC = () => {
    return (
        <div style={{ backgroundColor: Colours.block_color }} className="search-panel">
            <SearchInput />
            <ThemeSwitch />
            <Notifications />
            <Avatar />
        </div>
    )
}