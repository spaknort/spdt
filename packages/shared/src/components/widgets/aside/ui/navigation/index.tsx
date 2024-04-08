import React, { FC } from 'react'
import { NavigationItem } from './navigation-item'
import { INavigationItem } from '@/shared/lib/interfaces/INavigationItem'
import './index.sass'

interface NavigationProps {
    items: Array<INavigationItem>
}

export const Navigation: FC<NavigationProps> = ({ items }) => {
    return (
        <nav className="aside__nav">
            {
                items.map(item => (
                    <NavigationItem key={String( Date.now() * item.id )} svg={item.svg} path={item.path} title={item.title} />
                ))
            }
        </nav>
    )
}