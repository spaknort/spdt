import React from 'react'
import './index.sass'
import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'
import { Colours, LightThemeColours } from '../../../..'

interface CrossProps {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const Cross: React.FC<CrossProps> = ({ onClick }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const crossThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    return (
        <div onClick={e => {
            e.nativeEvent.stopPropagation()
            onClick(e)
        }} className="cross">
            <div style={{ background: crossThemeStyle }} className="cross-line"></div>
            <div style={{ background: crossThemeStyle }} className="cross-line"></div>
        </div>
    )
}