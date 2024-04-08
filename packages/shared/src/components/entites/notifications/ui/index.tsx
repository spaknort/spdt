import React from 'react'
import './index.sass'
import { GeneralSvgSelector } from '../../../generalSvgSelector'
import { generalSvgNames } from '../../../../lib/enum/generalSvgNames'
import { Colours } from '../../../..'

export const Notifications: React.FC = () => {
    return (
        <div className="notifications">
            <GeneralSvgSelector params={{ width: 24, height: 24, fill: Colours.text_color, stroke: Colours.text_color }} svgName={generalSvgNames.notification} />
        </div>
    )
}