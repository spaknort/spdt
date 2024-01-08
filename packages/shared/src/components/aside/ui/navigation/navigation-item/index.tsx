import React, { FC } from 'react'
import './index.sass'
import { Colours } from '@packages/shared'

interface NavigationItem {
    svg: any,
    title: string
}

export const NavigationItem: FC<NavigationItem> = ({ svg, title }) => {
    return (
        <a style={{ color: Colours.text_color }} className='aside__nav-item' href="">
            { svg }
            <span>{ title }</span>
        </a>
    )
}