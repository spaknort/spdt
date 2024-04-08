import React, { FC } from 'react'
import './index.sass'
import { Colours } from '@packages/shared'

export const Logo: FC = () => {
    return (
        <div style={{color: Colours.text_color}} className="logo">
            HORIZON 
            <span className="logo__span">FREE</span>
        </div>
    )
}