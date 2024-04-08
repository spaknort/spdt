import React from 'react'
import './index.sass'
import { GeneralSvgSelector } from '../../../generalSvgSelector'
import { generalSvgNames } from '../../../../lib/enum/generalSvgNames'

export const Notifications: React.FC = () => {
    return (
        <div className="notifications">
            <GeneralSvgSelector params={{ width: 24, height: 24 }} svgName={generalSvgNames.notification} />
        </div>
    )
}