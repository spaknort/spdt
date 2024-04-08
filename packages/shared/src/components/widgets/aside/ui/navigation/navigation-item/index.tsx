import React, { FC } from 'react'
import './index.sass'
import { Colours } from '@packages/shared'
import { Link } from 'react-router-dom'

interface NavigationItem {
    svg: any,
    title: string,
    path: string
}

export const NavigationItem: FC<NavigationItem> = ({ svg, title, path }) => {
    return (
        <Link style={{ color: Colours.text_color }} className='aside__nav-item' to={path}>
            { svg }
            <span>{ title }</span>
        </Link>
    )
}