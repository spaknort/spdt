import React from 'react'
import './index.sass'
import { Colours, generalSvgNames, GeneralSvgSelector, LightThemeColours, useTypedSelector } from '../../../..'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'

export const SearchInput: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const inputThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color

    return (
        <div className='search-block'>
            <input style={{ backgroundColor: inputThemeStyle }} placeholder='Search' type="text" className={"search-block__input search-block__input_" + theme.toLowerCase() } />
            <GeneralSvgSelector className='search-block__icon' params={{ width: 12, height: 12 }} svgName={generalSvgNames.searchInput} />
        </div>
    )
}