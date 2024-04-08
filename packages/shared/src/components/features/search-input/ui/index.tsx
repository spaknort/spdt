import React from 'react'
import './index.sass'
import { Colours, generalSvgNames, GeneralSvgSelector } from '../../../..'

export const SearchInput: React.FC = () => {
    return (
        <div className='search-block'>
            <input style={{ backgroundColor: Colours.background_color }} placeholder='Search' type="text" className="search-block__input" />
            <GeneralSvgSelector className='search-block__icon' params={{ width: 12, height: 12, stroke: '#fafafa' }} svgName={generalSvgNames.searchInput} />
        </div>
    )
}