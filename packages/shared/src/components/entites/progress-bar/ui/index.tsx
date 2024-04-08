import React from 'react'
import './index.sass'
import { ProgressBarTypes } from '../../../../lib/enum/progressBarTypes'
import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'
import { Colours, LightThemeColours } from '../../../..'

interface ProgressBarProps {
    type: ProgressBarTypes
    from?: number,
    value: number,
    to: number,
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ type, from, value, to }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const valueThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color
    const fillLineThemeStyle  = (theme == ThemeTypes.DARK) ? Colours.active_color: LightThemeColours.active_color
    const width = (value * 100) / (Math.abs(from) + Math.abs(to))

    return (
        <div className="progress-bar">
            <div className="progress-bar__header">
                <p style={{ color: valueThemeStyle }} className="progress-bar__value">{ value + ' ' + type.toUpperCase() }</p>
                <p style={{ color: valueThemeStyle }} className="progress-bar__value">{ to + ' ' + type.toUpperCase() }</p>
            </div>
            <div style={{ background: '#1b254b' }} className="progress-bar__line">
                <div style={{ width: width + '%', background: fillLineThemeStyle }} className="progress-bar__fill-line"></div>
            </div>
        </div>
    )
}