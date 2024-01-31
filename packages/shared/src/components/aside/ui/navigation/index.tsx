import React, { FC } from 'react'
import './index.sass'
import { NavigationItem } from './navigation-item'

interface NavigationItem {
    id: number,
    svg: any,
    title: string
}

interface NavigationProps {
    items: Array<NavigationItem>
}

export const Navigation: FC<NavigationProps> = ({ items }) => {
    return (
        <nav className="aside__nav">
            {
                items.map(item => (
                    <NavigationItem key={String( Date.now() * item.id )} svg={item.svg} title={item.title} />
                ))
            }
        </nav>
    )
}