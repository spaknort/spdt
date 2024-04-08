import React, { FC } from 'react'
import './index.sass'
import { Logo } from './logo'
import { Navigation } from './navigation'
import { Colours } from '@packages/shared'
import { INavigationItem } from '@/shared/lib/interfaces/INavigationItem'
 
interface AsideItem {
    id: number,
    svg: any,
    title: string
}

interface AsideProps {
    items?: Array<INavigationItem>
}

export const Aside: FC<AsideProps> = ({ items }) => {
    return (
        <aside style={{ backgroundColor: Colours.block_color }} className="aside">
            <Logo />
            <Navigation items={items} />
        </aside>
    )
}